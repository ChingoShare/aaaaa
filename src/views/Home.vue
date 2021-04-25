<template>
  <article>
    <transition-group>
      <Card class="card" @click="active(card)" v-for="card of cardList" :key="card.id" :card="card"/>
    </transition-group>
    <div class="text" v-if="text">Нажмите "Старт", чтобы начать новую игру.</div>
    <button class="button" @click="shuffle(); timer()">Старт</button>
    <p class="score">Счёт: {{score}}</p>
    <p class="timer">Таймер: {{time.min}}:{{time.sec}}</p>
    <div class="table">
      <p>Таблица лидеров:</p>
      <p v-for="item of table" :key="item.number">{{item.number}}-й игрок - {{item.score}} очков</p>
    </div>
  </article>
</template>

<script>
import Card from '../components/Card.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  components: {
    Card
  },
  computed: {
    ...mapState('memoryGame', [
      'cardList',
      'score',
      'time',
      'text',
      'table'
    ])
  },
  methods: {
    ...mapMutations('memoryGame', [
      'active',
      'shuffle',
      'timer'
    ])
  }
}
</script>

<style>
article {
  margin: 0 auto;
  height: 100%;
  width: fit-content;
  display: grid;
  grid-template: repeat(6, auto) / repeat(6, auto);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  position: relative;
}
p {
  color: rgb(0, 255, 0);
  font-size: 1.5em;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
  border-radius: 2px;
}
.button {
  grid-column-start: 1;
  grid-column-end: 3;
  font-size: 1.5em;
  font-weight: bold;
  padding: 5px 10px;
}
.score {
  grid-column-start: 3;
  grid-column-end: 5;
}
.timer {
  grid-column-start: 5;
  grid-column-end: 7;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: calc(100% - 80px);
  left: 0px;
  width: calc(100% + 3px);
  bottom: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.75);
  transition: .5s;
}
.table {
  position: absolute;
  top: 0;
  left: -300px;
}
</style>