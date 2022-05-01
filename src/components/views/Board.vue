<template>
  <section>
    <h3>
      <span>Mis paneles</span>
      {{ name }}
    </h3>
    <div>...</div>
  </section>
</template>

<script>
export default {
  components: {},
  name: 'board-view',
  props: {
    id: Number,
    name: String
  }
}
</script>

<style lang="scss" scoped>
  section {
    text-align: left;
  }

  h3 {
    color: #37474f;
    texxt-align: left;
    margin: 1.5rem;

    span {
      color: #546e7a;
    }
  }

</style>
