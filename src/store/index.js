import { createStore, mapState } from 'vuex'
import { last, shuffle } from 'lodash';
export default createStore({
  state: {
    cardList: [
      { img: "img/alex.jpg", name: "alex", rotate: true, id: 1 },
      { img: "img/cow.jpg", name: "cow", rotate: true, id: 2 },
      { img: "img/creeper.jpg", name: "creeper", rotate: true, id: 3 },
      { img: "img/drowned.jpg", name: "drowned", rotate: true, id: 4 },
      { img: "img/enderman.jpg", name: "enderman", rotate: true, id: 5 },
      { img: "img/ghast.jpg", name: "ghast", rotate: true, id: 6 },
      { img: "img/husk.jpg", name: "husk", rotate: true, id: 7 },
      { img: "img/magma-cube.jpg", name: "magma-cube", rotate: true, id: 8 },
      { img: "img/pig.jpg", name: "pig", rotate: true, id: 9 },
      { img: "img/sheep.jpg", name: "sheep", rotate: true, id: 10 },
      { img: "img/skeleton.jpg", name: "skeleton", rotate: true, id: 11 },
      { img: "img/slime.jpg", name: "slime", rotate: true, id: 12 },
      { img: "img/steve.jpg", name: "steve", rotate: true, id: 13 },
      { img: "img/stray.jpg", name: "stray", rotate: true, id: 14 },
      { img: "img/villager.jpg", name: "villager", rotate: true, id: 15 },
      { img: "img/wither-skeleton.jpg", name: "wither-skeleton", rotate: true, id: 16 },
      { img: "img/zombie.jpg", name: "zombie", rotate: true, id: 17 },
      { img: "img/zombie-pigman.jpg", name: "zombie-pigman", rotate: true, id: 18 },

      { img: "img/alex.jpg", name: "alex", rotate: true, id: 19 },
      { img: "img/cow.jpg", name: "cow", rotate: true, id: 20 },
      { img: "img/creeper.jpg", name: "creeper", rotate: true, id: 21 },
      { img: "img/drowned.jpg", name: "drowned", rotate: true, id: 22 },
      { img: "img/enderman.jpg", name: "enderman", rotate: true, id: 23 },
      { img: "img/ghast.jpg", name: "ghast", rotate: true, id: 24 },
      { img: "img/husk.jpg", name: "husk", rotate: true, id: 25 },
      { img: "img/magma-cube.jpg", name: "magma-cube", rotate: true, id: 26 },
      { img: "img/pig.jpg", name: "pig", rotate: true, id: 27 },
      { img: "img/sheep.jpg", name: "sheep", rotate: true, id: 28 },
      { img: "img/skeleton.jpg", name: "skeleton", rotate: true, id: 29 },
      { img: "img/slime.jpg", name: "slime", rotate: true, id: 30 },
      { img: "img/steve.jpg", name: "steve", rotate: true, id: 31 },
      { img: "img/stray.jpg", name: "stray", rotate: true, id: 32 },
      { img: "img/villager.jpg", name: "villager", rotate: true, id: 33 },
      { img: "img/wither-skeleton.jpg", name: "wither-skeleton", rotate: true, id: 34 },
      { img: "img/zombie.jpg", name: "zombie", rotate: true, id: 35 },
      { img: "img/zombie-pigman.jpg", name: "zombie-pigman", rotate: true, id: 36 }
    ],
    table: [],
    lastCard: 0,
    score: 0,
    time: { min: 2, sec: 0 },
    timerId: 0,
    timing: 0,
    text: true
  },
  mutations: {
    shuffle(state) {
      state.cardList = shuffle(state.cardList);
    },
    active(state, card) {
      if (!card.opacity) {
        card.rotate = true;
        setTimeout(function () {
          if (state.lastCard === 0) {
            state.lastCard = card.id;
            let timingId = setInterval(function () {
              state.timing++;
              if (state.timing >= 4 || state.lastCard !== card.id) {
                clearInterval(timingId);
                card.rotate = false;
                state.lastCard = 0;
                state.timing = 0;
              }
            }, 1e3);
          } else {
            const lastCard = state.cardList.find(el => el.id === state.lastCard);
            if (lastCard.name === card.name && lastCard.id !== card.id) {
              lastCard.opacity = true;
              card.opacity = true;
              state.score += 100;
            }
            lastCard.rotate = false;
            card.rotate = false;
            state.lastCard = 0;
          }
        }, .75e3);
      }
    },
    timer(state) {
      state.cardList.forEach(function (item) {
        item.opacity = false;
        item.rotate = false;
      });
      state.score = 0;
      state.time = { min: 2, sec: 0 };
      state.text = false;
      clearInterval(state.timerId);
      let countTime = 120;
      state.timerId = setInterval(function () {
        countTime--;
        state.time.min = parseInt(countTime / 60);
        state.time.sec = countTime % 60;
        if (countTime < 1 || state.score >= 1800) {
          state.cardList.forEach(function (item) {
            item.rotate = true;
          });
          state.table.push({ number: state.table.length + 1, score: state.score });
          state.table.sort(function (a, b) { return b.score - a.score });
          clearInterval(state.timerId);
          state.text = true;
        }
      }, 1e3);
    }
  },
  actions: {
  },
  modules: {
  }
})
