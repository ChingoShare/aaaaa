<template>
  <transition-group tag="article">
    <div class="card" @click="active(card)" v-for="card of cardList" :key="card.id">
      <img v-bind:class="{rotatefront: card.rotate, opacity: card.opacity}" class="front-img" :src="card.img" :alt="card.name">
      <img v-bind:class="{rotateback: card.rotate, opacity: card.opacity}" class="back-img" src="img/back-img.jpg" :alt="back-img">
    </div>
    <div class="text" v-if="text">Нажмите "Старт", чтобы начать новую игру.</div>
    <button class="button" @click="shuffle(); timer()">Старт</button>
    <p class="score">Счёт: {{score}}</p>
    <p class="timer">Таймер: {{time.min}}:{{time.sec}}</p>
    <div class="table">
      <p>Таблица лидеров:</p>
      <p v-for="item of table" :key="item.number">{{item.number}}-й игрок - {{item.score}} очков</p>
    </div>
  </transition-group>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cardList',
      'score',
      'time',
      'text',
      'table'
    ])
  },
  methods: {
    ...mapMutations([
      'shuffle',
      'active',
      'timer',
      'complete'
    ])
  }
}
</script>