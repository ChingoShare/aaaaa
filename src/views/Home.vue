<template>
  <article>
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
  </article>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'response'
    ])
  },
  methods: {
    ...mapActions ([
      'get'
    ])
  },
  mounted () {
    this.get ();
  }
}

</script>
