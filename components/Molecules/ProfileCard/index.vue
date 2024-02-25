<template>
  <div class="flex gap-5 m-2 p-5 profile">
    <span
      class="inline-block h-16 w-16 sm:h-28 sm:w-28 overflow-hidden rounded-full bg-gray-100"
    >
      <img
        class="inline-block rounded-full"
        src="@/assets/images/logo.png"
        alt=""
      />
    </span>
    <p>プロフィール説明文</p>
  </div>
</template>

<style scoped>
.profile {
  color: #232323;
  background: #fff8e8;
  border-left: solid 10px #ffc06e;
  border-radius: 5px;
}
</style>
