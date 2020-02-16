<template>
  <main>
    <gs-header :links="links" />
    <router-view class="container px-5 sm:px-20 py-20" />
  </main>
</template>

<script>
import GsHeader from "@/components/GsHeader";

export default {
  name: "app",
  components: { GsHeader },
  data() {
    let newDate = new Date();
    return {
      data: [
        {
          id: Date.now(),
          date: newDate.toString(),
          state: "Pendiente",
          priority: 3,
          name: "Tarea 1",
          description: "Tarea 1 description"
        }
      ],
      links: [
        {
          title: "Pendientes",
          to: { name: "todo-list" }
        },
        {
          title: "Terminadas",
          to: { name: "done-list" }
        }
      ]
    };
  },
  methods: {},
  beforeCreate() {
    console.log(this.data);
  },
  created() {
    console.log(this.data);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
