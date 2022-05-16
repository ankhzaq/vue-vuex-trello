<template>
  <section>
    <header>
      <h3>{{ name }}</h3>
    </header>
    <task-list
      :listId="listId"
      :tasks="tasksList"
    ></task-list>
  </section>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import TaskList from '@/components/TaskList';

export default {
  components: { TaskList },
  computed: {
    ...mapState([
        'fetchingData'
    ]),
    ...mapGetters([
        'getTasksFromList'
    ]),
    tasksList () {
      return this.getTasksFromList(this.listId)
    }
  },
  methods: {
    ...mapActions([
        'fetchTasks'
    ])
  },
  created () {
    this.fetchTasks({ listId: this.listId })
  },
  name: 'column-component',
  props: {
    listId: String,
    name: String
  }
}
</script>

<style lang="scss" scoped>

  h3 {
    margin: 0;
  }

  header {
    color: #37447f;
    margin: 0;
    padding-bottom: 1rem;
  }

  section {
    box-sizing: border-box;
    background-color: #eceff1;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49, 49, 93, .03), 0 2px 5px 0 rgba(49, 49, 93, .1), 0 1px 2px 0 rgba(0, 0, 0, .08);
    margin: 1rem;
    padding: 1rem;
    width: 100%;

    @media screen and (min-width: 600px) {
      width: calc(50% - 2rem - 2px);
    }

    @media screen and (min-width: 1024px) {
      width: calc(33% - 2rem - 2px);
    }

    @media screen and (min-width: 1200px) {
      width: calc(25% - 2rem - 2px);
    }
  }
</style>
