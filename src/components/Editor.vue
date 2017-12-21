<template>
  <div>
    <select v-model="lang">
      <option v-for="mode in modes" :value="mode" :key="mode">
        {{ mode }}
      </option>
    </select>
    <select v-model="theme">
      <option v-for="theme in themes" :value="theme" :key="theme">
        {{ theme }}
      </option>
    </select>
    <div ref="editor"
      :content="content" :lang="lang" :theme="theme"
      @keyup="dispatchKeyup" @keydown="dispatchKeydown"
      @keydown.tab="ignore" />
  </div>
</template>

<script>
import ace from 'brace'
export default {
  data () {
    return {
      editor: null,
      rawLang: 'javascript',
      rawTheme: 'chrome',
      modes: ['html', 'javascript', 'css', 'csharp', 'golang', 'java', 'markdown', 'python', 'ruby', 'swift', 'typescript'],
      themes: ['chrome', 'monokai', 'github'],
      rawContent: ''
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
  },
  mounted () {
    // import themes and langs
    for (const theme of this.themes) {
      require(`brace/theme/${theme}`)
    }
    for (const mode of this.modes) {
      require(`brace/mode/${mode}`)
    }

    const vm = this
    const lang = vm.lang
    const theme = vm.theme
    const editor = vm.editor = ace.edit(vm.$refs.editor)
    editor.$blockScrolling = Infinity
    editor.getSession().setMode(`ace/mode/${lang}`)
    editor.setTheme(`ace/theme/${theme}`)
    editor.setValue(vm.content, 1)
  },
  computed: {
    content: {
      get () {
        return this.rawContent
      },
      set (newValue) {
        if (this.rawContent !== newValue) {
          this.rawContent = newValue
          this.editor.setValue(newValue, 1)
        }
      }
    },
    lang: {
      get () {
        return this.rawLang
      },
      set (newValue) {
        this.rawLang = newValue
        this.editor.getSession().setMode(`ace/mode/${newValue}`)
      }
    },
    theme: {
      get () {
        return this.rawTheme
      },
      set (newValue) {
        this.rawTheme = newValue
        this.editor.setTheme(`ace/theme/${newValue}`)
      }
    }
  }
}
</script>
<style>
.ace_editor {
  width: 100%;
  height: 300px;
  text-align: left;
  margin-bottom: 30px;
}
</style>
