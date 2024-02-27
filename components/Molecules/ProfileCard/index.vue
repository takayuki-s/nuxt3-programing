<template>
  <div class="flex items-center gap-5 p-5 profile">
    <img
      class="inline-block rounded-full h-16 w-16 sm:h-28 sm:w-28"
      src="@/assets/images/logo.png"
      alt=""
    />
    <div>
      <p class="font-bold">webエンジニアのカフェ日記</p>
      <p>
        京都を中心に、関西で訪れたカフェを紹介しています。コーヒーよりも紅茶が好きで、特にアールグレイに目がありません。いただいた食べ物や飲み物を中心に紹介しますが、外観や店内の様子などもお伝えできればと思います。
      </p>
      <div class="flex justify-center my-2">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <NuxtLink to="/about">詳しいプロフィール</NuxtLink>
        </button>
      </div>
    </div>
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
