<template>
  <section class="s-filter">
    <div class="s-filter__input">
      <span class="s-filter__input-hint">Минимальный возраст</span>
      <input v-model="filterAge" type="text">
    </div>
    <a-button label="Применить" @action="setAgeFilter" />
  </section>
</template>

<script setup>
const emit = defineEmits(['ageFilter']);
const filterAge = ref();

const setAgeFilter = () => {
  emit('ageFilter', filterAge.value);
}
</script>

<style>
@import './s-filter.scss';
</style>