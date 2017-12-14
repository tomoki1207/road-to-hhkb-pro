<template>
<div id="keyboad_wrap">
  <div id="keyboard" ref="keyboard">
    <div id="main_area">
      <div class="k27 f_key" :class="{pressed:keyPressed('escape')}">
        <div class="keycap">Esc<span class="side">Power</span></div>
      </div>
      <div class="k49 key" :class="{pressed:keyPressed('1', '!')}">
        <div class="keycap">!<br/>1<span class="side">F1</span></div>
      </div>
      <div class="k50 key" :class="{pressed:keyPressed('2')}">
        <div class="keycap">@<br/>2<span class="side">F2</span></div>
      </div>
      <div class="k51 key" :class="{pressed:keyPressed('3')}">
        <div class="keycap">#<br/>3<span class="side">F3</span></div>
      </div>
      <div class="k52 key" :class="{pressed:keyPressed('4')}">
        <div class="keycap">$<br/>4<span class="side">F4</span></div>
      </div>
      <div class="k53 key" :class="{pressed:keyPressed('5')}">
        <div class="keycap">%<br/>5<span class="side">F5</span></div>
      </div>
      <div class="k54 key" :class="{pressed:keyPressed('6')}">
        <div class="keycap">^<br/>6<span class="side">F6</span></div>
      </div>
      <div class="k55 key" :class="{pressed:keyPressed('7')}">
        <div class="keycap">&amp;<br/>7<span class="side">F7</span></div>
      </div>
      <div class="k56 key" :class="{pressed:keyPressed('8')}">
        <div class="keycap">*<br/>8<span class="side">F8</span></div>
      </div>
      <div class="k57 key" :class="{pressed:keyPressed('9')}">
        <div class="keycap">(<br/>9<span class="side">F9</span></div>
      </div>
      <div class="k48 key" :class="{pressed:keyPressed('0')}">
        <div class="keycap">)<br/>0<span class="side">F10</span></div>
      </div>
      <div class="k189 key" :class="{pressed:keyPressed('-')}">
        <div class="keycap">_<br/>-<span class="side">F11</span></div>
      </div>
      <div class="k187 key" :class="{pressed:keyPressed('=')}">
        <div class="keycap">+<br/>=<span class="side">F12</span></div>
      </div>
      <div class="k220 key" :class="{pressed:keyPressed('\\')}">
        <div class="keycap">|<br/>\<span class="side">Ins</span></div>
      </div>
      <div class="k192 key" :class="{pressed:keyPressed('`', '~')}">
        <div class="keycap">~<br/>`<span class="side">Del</span></div>
      </div>
      <div class="k9 f_key" :class="{pressed:keyPressed('tab')}">
        <div class="keycap">Tab<span class="side">Caps</span></div>
      </div>
      <div class="k81 key" :class="{pressed:keyPressed('q')}">
        <div class="keycap">Q</div>
      </div>
      <div class="k87 key" :class="{pressed:keyPressed('w')}">
        <div class="keycap">W</div>
      </div>
      <div class="k69 key" :class="{pressed:keyPressed('e')}">
        <div class="keycap">E</div>
      </div>
      <div class="k82 key" :class="{pressed:keyPressed('r')}">
       <div class="keycap">R</div>
      </div>
      <div class="k84 key" :class="{pressed:keyPressed('t')}">
        <div class="keycap">T</div>
      </div>
      <div class="k89 key" :class="{pressed:keyPressed('y')}">
        <div class="keycap">Y</div>
      </div>
      <div class="k85 key" :class="{pressed:keyPressed('u')}">
        <div class="keycap">U</div>
      </div>
      <div class="k73 key" :class="{pressed:keyPressed('i')}">
        <div class="keycap">I<span class="side">PSc/SRq</span></div>
      </div>
      <div class="k79 key" :class="{pressed:keyPressed('o')}">
        <div class="keycap">O<span class="side">ScrLk</span></div>
      </div>
      <div class="k80 key" :class="{pressed:keyPressed('p')}">
        <div class="keycap">P<span class="side">Pus/Brk</span></div>
      </div>
      <div class="k219 key" :class="{pressed:keyPressed('[')}">
        <div class="keycap">{<br/>[<span class="side">↑</span></div>
      </div>
      <div class="k221 key" :class="{pressed:keyPressed(']')}">
        <div class="keycap">}<br/>]</div>
      </div>
      <div class="k8 f_key" :class="{pressed:keyPressed('delete', 'backspace')}">
        <div class="keycap">Delete<span class="side">BS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Clear</em></span></div>
      </div>
      <div class="k17 f_key" :class="{pressed:keyPressed('controlleft')}">
        <div class="keycap">Control</div>
      </div>
      <div class="k65 key" :class="{pressed:keyPressed('a')}">
        <div class="keycap">A<span class="side">Vol_Dn</span></div>
      </div>
        <div class="k83 key" :class="{pressed:keyPressed('s')}">
      <div class="keycap">S<span class="side">Vol_Up</span></div>
      </div>
      <div class="k68 key" :class="{pressed:keyPressed('d')}">
        <div class="keycap">D<span class="side">Mute</span></div>
      </div>
      <div class="k70 key" :class="{pressed:keyPressed('f')}">
        <div class="keycap">F<span class="side">Eject</span></div>
      </div>
      <div class="k71 key" :class="{pressed:keyPressed('g')}">
        <div class="keycap">G</div>
      </div>
      <div class="k72 key" :class="{pressed:keyPressed('h')}">
        <div class="keycap">H<span class="side">*</span></div>
      </div>
      <div class="k74 key" :class="{pressed:keyPressed('j')}">
        <div class="keycap">J<span class="side">/</span></div>
      </div>
      <div class="k75 key" :class="{pressed:keyPressed('k')}">
        <div class="keycap">K<span class="side">Home</span></div>
      </div>
      <div class="k76 key" :class="{pressed:keyPressed('l')}">
        <div class="keycap">L<span class="side">PageUp</span></div>
      </div>
      <div class="k186 key" :class="{pressed:keyPressed(';')}">
        <div class="keycap">:<br/>;<span class="side">←</span></div>
      </div>
      <div class="k222 key" :class="{pressed:keyPressed('')}">
        <div class="keycap">"<br/>'<span class="side">→</span></div>
      </div>
      <div class="k13 f_key" :class="{pressed:keyPressed('enter')}">
        <div class="keycap">Return<span class="side"><em>Enter</em></span></div>
      </div>
      <div class="k16 left f_key" :class="{pressed:keyPressed('shiftleft')}">
      <div class="keycap">Shift</div>
      </div>
      <div class="k90 key" :class="{pressed:keyPressed('z')}">
        <div class="keycap">Z</div>
      </div>
      <div class="k88 key" :class="{pressed:keyPressed('x')}">
        <div class="keycap">X</div>
      </div>
      <div class="k67 key" :class="{pressed:keyPressed('c')}">
        <div class="keycap">C</div>
      </div>
      <div class="k86 key" :class="{pressed:keyPressed('v')}">
        <div class="keycap">V</div>
      </div>
      <div class="k66 key" :class="{pressed:keyPressed('b')}">
        <div class="keycap">B</div>
      </div>
      <div class="k78 key" :class="{pressed:keyPressed('n')}">
        <div class="keycap">N<span class="side">+</span></div>
      </div>
      <div class="k77 key" :class="{pressed:keyPressed('m')}">
        <div class="keycap">M<span class="side">-</span></div>
      </div>
      <div class="k188 key" :class="{pressed:keyPressed(',')}">
        <div class="keycap">&lt;<br/>,<span class="side">End</span></div>
      </div>
      <div class="k190 key" :class="{pressed:keyPressed('.')}">
        <div class="keycap">&gt;<br/>.<span class="side">PageDn</span></div>
      </div>
      <div class="k191 key" :class="{pressed:keyPressed('/')}">
        <div class="keycap">?<br/>/<span class="side">↓</span></div>
      </div>
      <div class="k16 right f_key" :class="{pressed:keyPressed('shiftright')}">
        <div class="keycap">Shift</div>
      </div>
      <div class="fn f_key" :class="{pressed:keyPressed('fn')}">
        <div class="keycap">Fn</div>
      </div>
  </div>
    <div id="addition_wrap">
      <div id="addition">
        <div class="k18 left f_key" :class="{pressed:keyPressed('altleft')}">
          <div class="keycap"><span class="top">Opt</span><span class="bottom">Alt</span></div>
        </div>
        <div class="k224 k91 left f_key" :class="{pressed:keyPressed('metaleft')}">
          <div class="keycap"><span class="top">⌘</span><span class="bottom">◇</span></div>
        </div>
        <div class="k32 key" :class="{pressed:keyPressed(' ')}">
          <div class="keycap"></div>
        </div>
        <div class="k224 k93 right f_key" :class="{pressed:keyPressed('metaright')}">
          <div class="keycap"><span class="top">⌘</span><span class="bottom">◇</span><span class="side">Stop</span></div>
        </div>
        <div class="k18 right f_key" :class="{pressed:keyPressed('altright')}">
          <div class="keycap"><span class="top">Opt</span><span class="bottom">Alt</span></div>
        </div>
      </div>
    </div>
    </div>
    <p id="update">From <a href="https://codepen.io/P233">Peiwen Lu's</a> CSS/HTML pen <a href=" https://codepen.io/P233/details/qEagi">https://codepen.io/P233/details/qEagi</a>.</p>
</div>
</template>

<script>
export default {
  name: 'ProUS',
  methods: {
    keyPressed (...keys) {
      return keys.some(k => this.$store.getters.pressedKeys.includes(k))
    },
    shiftPressed () {
      return this.$store.getters.pressedKeys.includes('shift')
    },
    fnPressed () {
      return this.$store.getters.pressedKeys.includes('fn')
    }
  }
}
</script>

<style lang="sass" scoped>
@import compass

//UPDATE: Fixed for SASS 3.3 
// Colours
$black: #4d4d4d
$keyboard: #f5f3f1
$text: #555

/* -------------------------------------
 * style
 * ------------------------------------- */

@import url(https://fonts.googleapis.com/css?family=Average+Sans)

#keyboad_wrap
  width: 890px
  margin: 0 auto
  padding: 100px 30px 30px
  font-family: 'Average Sans', sans-serif
  color: $text
  text-shadow: 0 0 1px rgba(0,0,0,0.1)

/*------- Keyboard -------*/

#keyboard
  padding: 30px 8px 13px
  background: $keyboard
  background: -webkit-linear-gradient(top, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -moz-linear-gradient(top, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -ms-linear-gradient(top, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -o-linear-gradient(top, #e5e2e1, #f5f3f1, #e5e2e1)
  background: linear-gradient(top, #e5e2e1, #f5f3f1, #e5e2e1)
  border-radius: 5px
  box-shadow: 0 0 10px rgba(0,0,0,0.2), inset 0 0 3px rgba(0,0,0,0.3)
  -webkit-transform: rotateX(15deg)
  -ms-transform: rotateX(15deg)
  -o-transform: rotateX(15deg)

#main_area
  padding: 2px
  background: $black
  border-radius: 4px
  overflow: hidden
#addition_wrap
  width: 650px
  margin: -2px 0 0 85px
  padding: 0 2px 2px
  background: $black
  border-radius: 0 0 4px 4px
  position: relative
  &:before, &:after
    content: ""
    width: 5px
    height: 5px
    background: $keyboard
    border-top: 2px solid $black
    position: absolute
    top: 0px
  &:before
    left: -5px
    border-right: 2px solid $black
    border-radius: 0 5px 0 0
  &:after
    right: -5px
    border-left: 2px solid $black
    border-radius: 5px 0 0 0
#addition
  overflow: hidden

.key, .f_key
  width: 40px
  height: 45px
  margin: 2px
  border-width: 3px 7px 10px
  border-style: solid
  border-radius: 4px
  float: left
  &.pressed
    -webkit-transform: scale(0.9, 0.9)
    -moz-transform: scale(0.9, 0.9)
    -ms-transform: scale(0.9, 0.9)
    -o-transform: scale(0.9, 0.9)
    transform: scale(0.9, 0.9)
.key
  background: #d3cfcc
  border-color: #ece8e4 #dedad6 #c9c4c4
.f_key
  background: #a8aeb8
  border-color: #c4c7cc #adb9cc #96a6bd

.key .keycap
  width: 33px
  height: 40px
  padding: 5px 0 0 7px
  font-size: 18px
  line-height: 1
  background: #f5f3f1
  background: -webkit-linear-gradient(left, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -moz-linear-gradient(left, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -ms-linear-gradient(left, #e5e2e1, #f5f3f1, #e5e2e1)
  background: -o-linear-gradient(left, #e5e2e1, #f5f3f1, #e5e2e1)
  background: linear-gradient(left, #e5e2e1, #f5f3f1, #e5e2e1)
  box-shadow: 0 0 10px rgba(0,0,0,0.15)
  border-radius: 4px
  position: relative
.f_key .keycap
  width: inherit
  height: inherit
  font-size: 15px
  line-height: 45px
  text-indent: 7px
  background: #cdd3de
  background: -webkit-linear-gradient(left, #bbc3d2, #cdd3de, #bbc3d2)
  background: -moz-linear-gradient(left, #bbc3d2, #cdd3de, #bbc3d2)
  background: -ms-linear-gradient(left, #bbc3d2, #cdd3de, #bbc3d2)
  background: -o-linear-gradient(left, #bbc3d2, #cdd3de, #bbc3d2)
  background: linear-gradient(left, #bbc3d2, #cdd3de, #bbc3d2)
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
  border-radius: 4px
  position: relative

.top
  padding: 3px 5px 0 0
  font-size: 12px
  font-style: italic
  text-align: right
  line-height: 1
  display: block
.bottom
  width: inherit
  line-height: 20px
  display: block
.side
  font-size: 10px
  line-height: 1
  display: block
  position: absolute
  left: 4px
  bottom: -10px
  -webkit-transform: rotateX(50deg)
  -moz-transform: rotateX(50deg)
  -ms-transform: rotateX(50deg)
  -o-transform: rotateX(50deg)
  transform: rotateX(50deg)
.f_key .side
  left: -3px
.k13 .side
  right: 7px
  text-align: right

/*------- key width -------*/

.k27, .k18.left // esc and left alt
  width: 38px
  border-right-width: 9px
.k192, .fn, .k18.right // ~ , fn and right alt
  width: 38px
  border-left-width: 9px
.k192 .keycap
  width: 30px
  
///////////////////////////////////  
.k9
  width: 66px
  border-right-width: 10px
.k8
  width: 66px
  border-left-width: 10px
.k17
  width: 87px
  border-right-width: 10px
.k13
  width: 103px
  border-left-width: 10px
.k16.left
  width: 113px
  border-right-width: 10px
.k16.right
  width: 77px
  border-left-width: 10px
.k91, .k93
  width: 72px
  .top
    font-size: 13px
  .bottom
    font-size: 20px
.k91.left
  border-right-width: 10px
.k93.right
  border-left-width: 10px
.k32
  width: 328px
  border-width: 3px 8px 10px
  .keycap
    width: 321px
  &.pressed
    -webkit-transform: scale(0.98, 0.95)
    -moz-transform: scale(0.98, 0.95)
    -ms-transform: scale(0.98, 0.95)
    -o-transform: scale(0.98, 0.95)
    transform: scale(0.98, 0.95)
</style>

