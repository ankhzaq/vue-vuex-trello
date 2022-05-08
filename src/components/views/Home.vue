<template>
  <div>
    <h3>Mis Paneles</h3>
    <div class="boards-collection">
      <span v-if="fetchingData">Cargando...</span>
      <input
          type="text"
          placeholder="Añade un nuevo panel"
          v-model="boardName"
          @keyup.enter="add()"
      />
      <board-card
          v-for="(board, index) in boards"
          :key="index"
          :name="board.name"
          :id="board.id"
      >
      </board-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BoardCard from '@/components/BoardCard';

export default {
  components: { BoardCard },
  data () {
    return {
      boardName: ''
      /*boards: [
        { id: 1, name: 'Tareas' },
        { id: 2, name: 'Lista de la Compra' },
      ]*/
    }
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData'
   ])
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      console.log("add method");
      this.addBoard({ name: this.boardName });
      // this.boards.push({ id: this.boards.length + 1, name: this.boardName });
    }
  },

  created () {
    this.fetchBoards({ user: 1 })
  },
  name: 'home-view'
}
</script>


<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
   }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radious: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
