<template>
    <div>
      <img v-bind:class="{rotatefront: card.rotate, opacity: card.opacity}" class="front-img" :src="card.img" :alt="card.name">
      <img v-bind:class="{rotateback: card.rotate, opacity: card.opacity}" class="back-img" src="img/back-img.jpg" :alt="back-img">
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  transform-style: preserve-3d;
  overflow: visible;
  perspective: 500px;
  transition: transform 1s ease;
  width: 83px;
  height: 83px;
}
.front-img, .back-img {
  border-radius: 5px;
  width: 80px;
  height: 80px;
  transition: .75s;
  border: solid 3px rgb(0, 117, 0);
}
.front-img {
  position: relative;
  display: block;
  transform: rotateY(180deg);
}
.back-img {
  position: absolute;
  top: 0;
}
.rotatefront {
  transform: rotateY(360deg);
}
.rotateback {
  transform: rotateY(180deg);
}
.opacity {
  display: none;
}
</style>
