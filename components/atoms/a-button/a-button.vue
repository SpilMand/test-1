<template>
  <button class="a-button" @click="emit('action')">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' }
})
const emit = defineEmits(['action']);
</script>

<style>
@import './a-button.scss';
</style>