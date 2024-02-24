<template>
  <div class="flex gap-5 p-5 profile">
    <span
      class="inline-block h-32 w-32 overflow-hidden rounded-full bg-gray-100"
    >
      <svg
        class="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </span>
    <p>プロフィール説明文</p>
  </div>
</template>

<style scoped>
.profile {
  margin: 2em 0;
  color: #232323;
  background: #fff8e8;
  border-left: solid 10px #ffc06e;
  border-radius: 5px;
}
</style>
