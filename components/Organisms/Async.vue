<script setup lang="ts">
const { data, pending, error } = await useFetch('/message', { server: false })
async function waitOneSecond() {
  // Promiseを使って非同期処理を実行
  return new Promise((resolve) => {
    setTimeout(() => {
      // 1秒経過後にresolve()を呼び出す
      resolve()
    }, 1000) // 1000ミリ秒 = 1秒
  })
}

// 非同期処理を呼び出し、待機する
async function main() {
  console.log('処理を開始します')
  await waitOneSecond() // 1秒間待つ
  console.log('1秒が経過しました')
}

// メイン関数を呼び出し
await main()
</script>

<template>
  <div v-if="data">{{ data }}</div>
</template>
