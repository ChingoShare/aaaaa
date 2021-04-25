<template>
  <article v-if="!loading">
    <Card :flat="flat" v-for="flat in items" />
  </article>
  <h1 v-if="loading">Загрузка...</h1>
</template>

<script>
import Card from '../components/Card.vue'
import { mapActions, mapState } from "vuex";

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState('flats', [ 'items', 'loading' ])
  },
  methods: {
    ...mapActions ('flats', [ 'get' ])
  },
  mounted () {
    this.get();
  }
}
</script>
<style>
article {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
