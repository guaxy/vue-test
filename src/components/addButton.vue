<template>
  <router-link
    :to="{ name: 'add-todo' }"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    + Crear nueva tarea
  </router-link>
</template>

<script>
  export default {
    name: "addButton",
    components: {}
  };
</script>

<style></style>
