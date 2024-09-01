<template>
  <section class="s-users-list">
    <div class="s-users-list__head s-users-list__row">
      <div class="s-users-list__user-item">Photo</div>
      <div class="s-users-list__user-item">Name</div>
      <div class="s-users-list__user-item">Email</div>
      <div class="s-users-list__user-item head-age" @click="ageSorting">Age</div>
    </div>
    <div 
      class="s-users-list__user s-users-list__row"
      v-for="user in users"
      :key="user"
      :style="`order: ${user.age * sorting}`"
    >
      <div class="s-users-list__user-photo s-users-list__user-item" @click="addPhoto(user)">
        <img :src="user.photo" :alt="user.username">
        <div class="hint">Изменить изображение</div>
      </div>
      <div class="s-users-list__user-name s-users-list__user-item">{{ user.name }}</div>
      <div class="s-users-list__user-email s-users-list__user-item">{{ user.email }}</div>
      <div class="s-users-list__user-age s-users-list__user-item">{{ user.age }}</div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  users: { type: Object, default: () => {} }
});
const emit = defineEmits(['addPhoto']);

const addPhoto = (data) => {
  emit('addPhoto', data);
}

const sorting = ref(0);

const ageSorting = () => {
  if (sorting.value < 0) {
    sorting.value = 0;
  } else if (sorting.value == 0) {
    sorting.value = 1;
  } else {
    sorting.value = -1;
  }
}

</script>

<style>
@import './s-users-list.scss';
</style>