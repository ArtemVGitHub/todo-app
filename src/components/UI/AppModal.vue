<template>
  <div class="modal">
    <div class="conent mx-4 my-4">
      <spn class="text-xl">Do you want to clear all copleted?</spn>
      <div class="flex gap-6"><slot /></div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
}
.conent {
  width: 100%;
  max-width: 500px;
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  background-color: #fff;
}
</style>
