<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { z, ZodError } from 'zod'

import Button from '@/components/Atoms/Button/index.vue'

type Props = {
  comparisonValueMeta?: {
    value: string
    messageMeta: string
    type: string
  }
}

const props = withDefaults(defineProps<Props>(), {
  comparisonValueMeta: undefined,
})

const { t } = useI18n()

const minValue = '10'
const maxValue = '100'

const validationSchema = z
  .object({
    name: z.string().min(1, t('validation.required')),
    email: z.string().email(t('validation.email')),
    phone: z.string().regex(/^\d{10,11}$/, t('validation.phone')),
    password: z
      .string()
      .min(6, t('validation.greater_than_length', { num: 6 }))
      .max(20, t('validation.less_than_length', { num: 20 })),
    passwordConfirm: z.string(),
    stringNumber: z
      .string()
      .min(1, t('validation.required'))
      .regex(/^\d{1,20}(\.\d+)?$/, t('validation.max_digits', { mum: 20 })) // 整数部最大20桁
      .regex(/^\d+(\.\d{1,5})?$/, t('validation.max_decimal', { num: 5 })), // 小数部最大5桁
    comparisonNumber: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: t('validation.password_confirm'),
    path: ['passwordConfirm'],
  })
  .superRefine((data, ctx) => {
    if (minValue) {
      const num = parseFloat(data.stringNumber)
      if (num < 10) {
        ctx.addIssue({
          code: 'custom',
          path: ['stringNumber'],
          message: t('validation.greater_than_number', { num: minValue }),
        })
      }
    }
    if (maxValue) {
      const num = parseFloat(data.stringNumber)
      if (num > 100) {
        ctx.addIssue({
          code: 'custom',
          path: ['stringNumber'],
          message: t('validation.less_than_number', { num: maxValue }),
        })
      }
    }
    if (props.comparisonValueMeta) {
      const num = parseFloat(data.comparisonNumber)
      const comparisonNum = parseFloat(props.comparisonValueMeta.value)
      if (num > comparisonNum) {
        ctx.addIssue({
          code: 'custom',
          path: ['comparisonNumber'],
          message: t('validation.less_than_number', { num: comparisonNum }),
        })
      }
    }
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
  stringNumber: '',
  comparisonNumber: '',
})

// エラー管理
const errors = ref<Record<keyof FormData, string | null>>({
  name: null,
  email: null,
  phone: null,
  password: null,
  passwordConfirm: null,
  stringNumber: null,
  comparisonNumber: null,
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
    <h1>簡単なバリデーションフォーム{{ errors }}</h1>

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

    <!-- 数値 -->
    <div>
      <label for="passwordConfirm">数値（string）</label>
      <input
        id="passwordConfirm"
        v-model="formData.stringNumber"
        type="text"
        @blur="validateField('stringNumber')"
        @input="validateField('stringNumber')"
        :class="{ 'border-red-500': errors.stringNumber }"
      />
      <p v-if="errors.stringNumber" class="text-red-500">
        {{ errors.stringNumber }}
      </p>
    </div>

    <!-- 数値 -->
    <div>
      <label for="comparisonNumber">比較数値（string）</label>
      <input
        id="comparisonNumber"
        v-model="formData.comparisonNumber"
        type="text"
        @blur="validateField('comparisonNumber')"
        @input="validateField('comparisonNumber')"
        :class="{ 'border-red-500': errors.comparisonNumber }"
      />
      <p v-if="errors.comparisonNumber" class="text-red-500">
        {{ errors.comparisonNumber }}
      </p>
    </div>

    <!-- 提出ボタン -->
    <Button
      @click="submitForm"
      text="提出"
      :disabled="isSubmitting || hasErrors"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
    />
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
