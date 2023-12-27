<template>
  <div class="legend flex flex-col items-center gap-2 sm:flex-row justify-center">
    <div class="legend__item mr-10">- Active</div>
    <div class="legend__item mr-4">- Complete</div>
    <div>Double click to mark as complete</div>
  </div>
</template>

<style scoped>
.legend__item {
  position: relative;
}
.legend__item::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -28px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 25%;
  background-color: var(--secondary-color);
}
.legend__item:first-child::before {
  background-color: var(--primary-color);
}
</style>
