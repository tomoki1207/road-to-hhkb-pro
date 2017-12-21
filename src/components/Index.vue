<template>
  <div class="editor-wrap">
    <editor />
    <toggle-switches />
    <pro-us />
  </div>
</template>

<script>
import Editor from './Editor'
import ProUS from './keyboards/ProUS'
import ToggleSwitches from './keyboards/ToggleSwitch'
export default {
  name: 'Index',
  components: {
    editor: Editor,
    'pro-us': ProUS,
    'toggle-switches': ToggleSwitches
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.editor_wrap {
  width: 100vw;
}
</style>
