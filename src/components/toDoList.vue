<template>
  <div>
    <div class="flex float-right">
      <add-button />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      <h1>Tareas pendientes</h1>
    </div>
    <div class="flex container justify-center">
      <task-table-list :tasks="data" />
    </div>
  </div>
</template>

<script>
import addButton from "@/components/addButton";
import taskTableList from "@/components/taskTableList";

export default {
  name: "toDoList",
  components: { addButton, taskTableList },

  data() {
    return {
      data: []
    };
  },
  created() {
    this.data = this.$parent.data.filter(
      t => t.state.toLowerCase() === "pendiente"
    );
  }
};
</script>

<style></style>
