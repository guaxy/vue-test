import Vue from "vue";
import Router from "vue-router";

import toDoList from "@/components/toDoList";
import doneList from "@/components/doneList";
import addTodo from "@/components/addToDo";
import selectedToDo from "@/components/selectedToDo";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      redirect: "todo-list"
    },
    {
      path: "/todo-list",
      name: "todo-list",
      component: toDoList
    },
    {
      path: "/done-list",
      name: "done-list",
      component: doneList
    },
    {
      path: "/add-todo",
      name: "add-todo",
      component: addTodo
    },
    {
      path: "/selected-task/:id",
      name: "selected-task",
      component: selectedToDo
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
