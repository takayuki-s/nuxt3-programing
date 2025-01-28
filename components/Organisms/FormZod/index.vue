<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { z, ZodError } from 'zod'

// バリデーションスキーマ定義
const validationSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, '電話番号は10桁または11桁の数字で入力してください'),
})

// 型定義
type FormData = z.infer<typeof validationSchema>

// フォームデータ
const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
})

// エラー管理
const errors = reactive<Record<keyof FormData, string | null>>({
  name: null,
  email: null,
  phone: null,
})

// 提出中フラグ
const isSubmitting = ref(false)

// エラーの有無
const hasErrors = computed(() => {
  return Object.values(errors).some((error) => error !== null)
})

// 入力内容を監視してリアルタイムバリデーション
watch(
  () => formData,
  (newValues) => {
    Object.keys(newValues).forEach((key) => {
      validateField(key as keyof FormData)
    })
  },
  { deep: true },
)

// フィールド単体のバリデーション
const validateField = (fieldName: keyof FormData) => {
  const fieldSchema = validationSchema.pick({ [fieldName]: true })
  try {
    fieldSchema.parse({ [fieldName]: formData[fieldName] })
    errors[fieldName] = null // エラーをクリア
  } catch (e) {
    if (e instanceof ZodError) {
      errors[fieldName] = e.errors[0].message
    }
  }
}

// フォーム全体の送信
const submitForm = async () => {
  isSubmitting.value = true
  try {
    validationSchema.parse(formData) // 全体を検証
    alert('フォームを正常に送信しました！')
    Object.keys(errors).forEach((key) => (errors[key as keyof FormData] = null))
  } catch (e) {
    if (e instanceof ZodError) {
      e.errors.forEach((error) => {
        errors[error.path[0] as keyof FormData] = error.message
      })
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="validation-form">
    <h1>簡単なバリデーションフォーム</h1>

    <!-- 名前 -->
    <div>
      <label for="name">名前</label>
      <input
        id="name"
        v-model="formData.name"
        type="text"
        @blur="validateField('name')"
        :class="{ 'border-red-500': errors.name }"
      />
      <p v-if="errors.name" class="text-red-500">{{ errors.name }}</p>
    </div>

    <!-- メールアドレス -->
    <div>
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        @blur="validateField('email')"
        :class="{ 'border-red-500': errors.email }"
      />
      <p v-if="errors.email" class="text-red-500">{{ errors.email }}</p>
    </div>

    <!-- 電話番号 -->
    <div>
      <label for="phone">電話番号</label>
      <input
        id="phone"
        v-model="formData.phone"
        type="text"
        @blur="validateField('phone')"
        :class="{ 'border-red-500': errors.phone }"
      />
      <p v-if="errors.phone" class="text-red-500">{{ errors.phone }}</p>
    </div>

    <!-- 提出ボタン -->
    <button
      @click="submitForm"
      :disabled="isSubmitting"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    >
      提出
    </button>
  </div>
</template>

<style scoped>
.validation-form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 24px;
    width: 300px;
    padding: 5px;
    font-size: 16px;
    background-color: white;
  }
  .input-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}

input {
  display: block;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  background-color: white;
}
input.border-red-500 {
  border-color: red;
}
.text-red-500 {
  color: red;
}
</style>
