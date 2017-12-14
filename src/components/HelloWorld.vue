<template>
  <div class="hello">
    <textarea @keyup="dispatchKeyup" @keydown="dispatchKeydown" @keydown.tab="ignore" />
    <pro-us />
  </div>
</template>

<script>
import ProUS from './keyboards/ProUS'
export default {
  name: 'HelloWorld',
  components: {
    'pro-us': ProUS
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    dispatchKeyup (e) {
      this.$store.commit('keyup', e)
    },
    dispatchKeydown (e) {
      this.$store.commit('keydown', e)
    },
    ignore (e) {
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
