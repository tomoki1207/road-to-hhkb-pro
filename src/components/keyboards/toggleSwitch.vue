<template>
  <div>
    <label class="switch">
      <input type="checkbox" v-model="bsIsDelete">
      <span class="slider round">Del → BS</span>
    </label>
    <label class="switch">
      <input type="checkbox" v-model="leftMetaIsFn">
      <span class="slider round">Left◇ → Fn</span>
    </label>
    <label class="switch">
      <input type="checkbox" v-model="swapMetaAlt">
      <span class="slider round">Alt ↔︎ ◇</span>
    </label>
  </div>
</template>

<script>
export default {
  computed: {
    bsIsDelete: {
      get () {
        return this.$store.bsIsDelete
      },
      set (value) {
        this.$store.commit('bsIsDelete', value)
      }
    },
    leftMetaIsFn: {
      get () {
        return this.$store.leftMeataIsFn
      },
      set (value) {
        this.$store.commit('leftMetaIsFn', value)
      }
    },
    swapMetaAlt: {
      get () {
        return this.$store.swapMetaAlt
      },
      set (value) {
        this.$store.commit('swapMetaAlt', value)
      }
    }
  }
}
</script>


<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 2em;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(126px);
  -ms-transform: translateX(126px);
  transform: translateX(126px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
