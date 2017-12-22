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
      rawLang: 'text',
      rawTheme: 'chrome',
      modes: ['text', 'html', 'javascript', 'css', 'csharp', 'golang', 'java', 'markdown', 'python', 'ruby', 'swift', 'typescript'],
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
    editor.setOptions({
      maxLines: 12
    })
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
  min-height: 200px;
  text-align: left;
  margin: 2px 30px 5px 30px;
  border: 1px solid #ccc;
}
</style>
