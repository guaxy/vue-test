<template>
  <form-task />
</template>

<script>
import formTask from "@/components/formTask";

export default {
  name: "selectedToDo",
  components: { formTask },
  data() {
    return {
      data: this.$parent.data
    };
  },
  created() {
    const id = this.$route.params.id;
    console.log(id);
  }
};
</script>

<style></style>
