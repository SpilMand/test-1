<template>
  <div>
    <s-filter @ageFilter="ageFilter" />
    <s-users-list :users="filteredUsers || users" @addPhoto="addPhoto" />
  </div>
</template>

<script setup>
import getUsers from '~/api/getUsers.js';

const users = await getUsers();
const filteredUsers = ref();

onMounted(() => {
  addProperties();
})

const addProperties = async () => {
  users = users.map(element => {
    element.age = randomAge();
    if (localStorage.getItem(`${element.username}-photo`)) {
      element.photo = localStorage.getItem(`${element.username}-photo`);
    }
  });
}

const randomAge = () => {
  return Math.floor(Math.random() * 50 + 10);
}

const addPhoto = (data) => {
  const url = prompt('Введите адрес изображения');
  data.photo = url;
  localStorage.setItem(`${data.username}-photo`, url);
}

const ageFilter = (value) => {
  filteredUsers.value = users;
  filteredUsers.value = filteredUsers.value.filter((element) => element.age > value);
  
}

</script>