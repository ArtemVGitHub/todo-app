<template>
  <div class="loader absolute w-full h-screen top-0 left-0 flex justify-center items-center">
    <div class="loader__body w-12 h-12 rounded-full inline-block"></div>
  </div>
</template>

<style scoped>
.loader {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader__body {
  border: 5px solid var(--secondary-color);
  border-bottom-color: var(--primary-color);
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
