<template>
  <div
    class="fixed z-50 p-6 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-70"
  >
    <div
      class="conent w-full max-w-[500px] p-10 rounded-xl flex flex-col gap-6 items-center bg-white"
    >
      <span class="text-xl">Do you want to clear all completed?</span>
      <div class="flex gap-6"><slot /></div>
    </div>
  </div>
</template>
