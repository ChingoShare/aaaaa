<template>
  <div class="card" v-for="item of response" :key="item.id">
    <img src="img/flat.png" :alt="item.attributes.title">
    <p class="title">{{item.attributes.title}}</p>
    <p>{{item.attributes.rooms}}-комнатная, {{item.attributes.area}} {{item.attributes.unit}}.</p>
    <p>г.{{item.attributes.address.city}}
      ул.{{item.attributes.address.street}}
      д.{{item.attributes.address.house}}
      кв.{{item.attributes.address.room}}
    </p>
    <p>
      {{item.relationships.attributes.first_name}}
      {{item.relationships.attributes.middle_name}}
      {{item.relationships.attributes.last_name}}
    </p>
    <p class="like" v-bind:class="{red: item.like}" @click="item.like = !item.like">❤️</p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Card',
  computed: {
    ...mapState('card', [
      'response'
    ])
  },
  methods: {
    ...mapActions ('card', [
      'get'
    ])
  },
  mounted () {
    this.get ();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.card {
  border-radius: 1vw;
  box-shadow: 0 0 .5vw black;
  margin: 10px;
  width: 280px;
  overflow: hidden;
}
img {
  width: 100%;
  height: auto;
}
p {
  font-size: 1em;
  word-break: break-all;
  margin: 1%;
}
.title {
  font-weight: bold;
  text-transform: uppercase;
}
.like {
  user-select: none;
  display: inline-block;
  font-size: 3em;
  cursor: default;
  margin: 0;
}
.red {
  color: red;
}
@media screen and (max-width: 300px) {
  header {
    margin-bottom:  6vw;
  }
  footer {
    margin-top:  6vw;
  }
  header p{
    font-size: 10.66666vw;
  }
  .card {
    width: 97vw;
    margin: 3vw;
  }
  p {
    font-size: 5.33333vw;
  }
  .like {
    font-size: 16vw;
  }
}
@media screen and (min-width: 1200px) {
  header {
    margin-bottom:  1.5vw;
  }
  footer {
    margin-top:  1.5vw;
  }
  header p{
    font-size: 2.66666vw;
  }
  .card {
    width: 24.25vw;
    margin: .75vw;
  }
  p {
    font-size: 1.33333vw;
  }
  .like {
    font-size: 4vw;
  }
}
</style>
