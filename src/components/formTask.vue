<template>
  <form class="w-full max-w-lg" @submit.prevent="onSubmit">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Nombre</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-name"
          type="text"
          placeholder="Nombre de la tarea"
          v-model="task.name"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >Descripcion</label>
        <textarea
          v-model="task.description"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-descripcion"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >Prioridad</label>
        <div class="relative">
          <select
            v-model.number="task.priority"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >Estado</label>
        <input type="radio" id="pendiente" value="Pendiente" v-model="task.state" />
        <label for="pend">Pendiente</label>
        <br />
        <input type="radio" id="terminada" value="Terminada" v-model="task.state" />
        <label for="Dos">Terminada</label>
        <br />
      </div>
    </div>
    <div class="flex items-center justify-between">
      <a
        @click="back"
        class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="#"
      >Regresar</a>
      <input
        value="Guardar"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "formTask",
  components: {},
  data() {
    return {
      isNew: false,
      task: {
        id: null,
        date: null,

        state: "",
        priority: 0,
        description: "",
        name: ""
      }
    };
  },
  methods: {
    back() {
      //console.log(this.$router.go(-1));
      this.$router.go(-1);
    },
    onSubmit() {
      let newDate = new Date().toString();
      let newTask = {
        id: Date.now(),
        date: newDate.toString(),
        state: this.task.state,
        priority: this.task.priority,
        name: this.task.name,
        description: this.task.description
      };
      if (this.isNew) {
        this.$parent.data.push(newTask);
      }
      this.back();
    }
  },
  created() {
    console.log(this.$parent.data);
    if (!this.$route.params.id) {
      this.isNew = true;
    } else {
      console.log(this.task);
      let currentTask = this.$parent.data.filter(
        t => t.id === this.$route.params.id
      );
      this.task = currentTask[0];
      console.log(currentTask);
      console.log("edicion");
    }
  }
};
</script>

<style></style>
