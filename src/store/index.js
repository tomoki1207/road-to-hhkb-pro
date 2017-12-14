import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const multiKeys = ['alt', 'meta', 'shift', 'control']
const detectKey = keyboardEvent => {
  const key = keyboardEvent.key.toLowerCase()
  if (!multiKeys.includes(key)) {
    return key
  }
  return keyboardEvent.code.toLowerCase()
}

const state = {
  pressedKeySet: new Set()
}

const mutations = {
  keydown (state, keyboardEvent) {
    const keys = Array.from(state.pressedKeySet.values())
    keys.push(detectKey(keyboardEvent))
    state.pressedKeySet = new Set(keys)
  },
  keyup (state, keyboardEvent) {
    const keys = [detectKey(keyboardEvent)]
    const pressed = Array.from(state.pressedKeySet.values()).filter(k => !keys.includes(k))
    state.pressedKeySet = new Set(pressed)
  }
}

const getters = {
  pressedKeys: state => {
    return Array.from(state.pressedKeySet.values())
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
