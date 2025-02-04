<script setup lang="ts">
import { ref } from 'vue'
import { z, ZodError } from 'zod'

const validationSchema = z
  .object({
    name: z.string().min(1, '名前は必須です'),
    email: z.string().email('正しいメールアドレスを入力してください'),
    phone: z
      .string()
      .regex(/^\d{10,11}$/, '電話番号は10桁または11桁の数字で入力してください'),
    password: z.string().min(6, 'パスワードは6文字以上で入力してください'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'パスワードが一致しません',
    path: ['passwordConfirm'],
  })

// 型定義
type FormData = z.infer<typeof validationSchema>

// フォームデータ
const formData = ref<FormData>({
  name: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: '',
})

// エラー管理
const errors = ref<Record<keyof FormData, string | null>>({
  name: null,
  email: null,
  phone: null,
  password: null,
  passwordConfirm: null,
})

// 提出中フラグ
const isSubmitting = ref(false)

// エラーの有無
const hasErrors = computed(() => {
  return Object.values(errors).some((error) => error !== null)
})

// フィールド単体のバリデーション
const validateField = (fieldName: keyof FormData) => {
  try {
    validationSchema.parse(formData.value)
    errors.value[fieldName] = null
  } catch (e) {
    if (e instanceof ZodError) {
      const fieldError = e.errors.find((error) => error.path[0] === fieldName)
      errors.value[fieldName] = fieldError ? fieldError.message : null
    }
  }
}

// フォーム全体の送信
const submitForm = async () => {
  isSubmitting.value = true
  try {
    validationSchema.parse(formData.value)
    alert('フォームを正常に送信しました！')

    // 全てのエラーをクリア
    Object.keys(errors.value).forEach(
      (key) => (errors.value[key as keyof FormData] = null),
    )
  } catch (e) {
    if (e instanceof ZodError) {
      e.errors.forEach((error) => {
        errors.value[error.path[0] as keyof FormData] = error.message
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
        @input="validateField('name')"
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
        @input="validateField('email')"
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
        @input="validateField('phone')"
        :class="{ 'border-red-500': errors.phone }"
      />
      <p v-if="errors.phone" class="text-red-500">{{ errors.phone }}</p>
    </div>

    <!-- パスワード -->
    <div>
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="formData.password"
        type="text"
        @blur="validateField('password')"
        @input="validateField('password')"
        :class="{ 'border-red-500': errors.password }"
      />
      <p v-if="errors.password" class="text-red-500">{{ errors.password }}</p>
    </div>

    <!-- パスワード(確認) -->
    <div>
      <label for="passwordConfirm">パスワード（確認）</label>
      <input
        id="passwordConfirm"
        v-model="formData.passwordConfirm"
        type="text"
        @blur="validateField('passwordConfirm')"
        @input="validateField('passwordConfirm')"
        :class="{ 'border-red-500': errors.passwordConfirm }"
      />
      <p v-if="errors.passwordConfirm" class="text-red-500">
        {{ errors.passwordConfirm }}
      </p>
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
