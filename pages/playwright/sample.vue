<script setup lang="ts">
import imagePath from '@/assets/images/top.jpg'
useHead({
  title: '最初のページ',
  meta: [{ name: '最初のステップ', content: 'My amazing site.' }],
})
</script>

<template>
  <main>
    <h1>Playwright</h1>
    <p>E2Eテスト用</p>
    <p>
      <button>ボタン</button>
    </p>
  </main>
  <div>
    <ul>
      <li id="1">赤</li>
      <li id="2">青</li>
      <li id="3">黄</li>
    </ul>
  </div>
  <div class="paragraph-container">
    <p>最初の段落</p>
    <p>中の段落</p>
    <p>最後の段落</p>
  </div>
  <div>
    <img class="w-1/4" :src="imagePath" />
  </div>
</template>
