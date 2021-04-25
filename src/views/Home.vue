<template>
  <article>
    <Card/>
  </article>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
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
