<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>Nombre</th>

        <th :class="{ up: this.sortOrder === 1, down: this.sortOrder === -1 }">
          <span @click="changeSortOrder">Prioridad</span>
        </th>
        <th>Creada</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-if="!tasks.length">
        <td colspan="4">Registros no encontrados</td>
      </tr>
      <tr
        v-for="(t,i) in filteredTask"
        :key="t.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <b>{{ t.name }}</b>
        </td>
        <td>{{ t.priority }}</td>
        <td>{{ t.date | formatDate }}</td>
        <td>
          <router-link
            class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
            :to="{ name: 'selected-task', params: { id: t.id } }"
          >Editar</router-link>
          <a
            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            @click="deleteTask(t,i)"
          >Eliminar</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "taskTableList",

  components: {},

  data() {
    return {
      filter: "",
      sortOrder: 1
    };
  },

  props: {
    tasks: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    filteredTask() {
      const altOrder = this.sortOrder === 1 ? -1 : 1;
      console.log(this.tasks);
      return this.tasks
        .filter(
          t =>
            t.date.toLowerCase().includes(this.filter.toLowerCase()) ||
            t.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.priority) > parseInt(b.priority)) {
            return this.sortOrder;
          }

          return altOrder;
        });
    }
  },

  methods: {
    deleteTask(task, index) {
      this.$parent.data.splice(this.$parent.data.indexOf(task), 1);
    },
    changeSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    }
  }
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
