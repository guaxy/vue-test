<template  >
  <form-task />
</template>

<script>
import formTask from "@/components/formTask";

export default {
  name: "addTodo",
  components: { formTask },
  data() {
    return {
      data: this.$parent.data
    };
  },
  created() {
    console.log(this.$parent.data);
  },
  methods: {}
};
</script>

<style></style>
