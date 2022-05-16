import Vue from 'vue';
import * as types from './mutations-types';

export default {
  // Fetch de los paneles creados por el usuario
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.fetchingData = false;
    state.boards = { ...boards }
  },

  [types.FETCH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // Fetch de las listas de un determinado panel
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
    state.fetchingData = false;
    state.lists = { ...lists };
  },

  [types.FETCH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },

  // Fetch de las tareas correspondientes a una lista
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },

  [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
    // eslint-disable-next-line no-debugger
    debugger;
    state.fetchingData = false;
    state.tasks = Object.assign({}, state.tasks, tasks);
  },

  [types.FETCH_TASKS_FAILURE] (state, { error }) {
    // eslint-disable-next-line no-debugger
    debugger;
    state.fetchingData = false;
    state.error = error;
  },

  // Crear un nuevo panel
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board);
  },

  // Crear una nueva lista de tareas
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column);
  },

  // Crear una nueva tarea
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task);
  },

  // Borrar una tarea de una lista de tareas
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks).filter(task => task.id !== taskId)
  },

  // Crear un nuevo panel
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed;
  }
}
