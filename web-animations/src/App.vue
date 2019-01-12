<template>
  <div id="app">
    <input id="animation"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

const borderColorAnimation =[
  { borderColor: 'white' },
  { borderColor: 'darkgray' }
]

const borderColorTiming = {
  duration: 500,
  fill: 'forwards',
}

const borderSizeAnimation = [
  { width: '.15em' },
  { width: '20em' },
];

const borderSizeTiming = {
  delay: 500,
  duration: 1500,
  easing: 'cubic-bezier(.29,.87,0,1)',
  fill: 'forwards'
};

@Component
export default class App extends Vue {
  data() {
    return {
      test: 'hello'
    }
  }
  mounted() {
    const doc = document.getElementById("animation");
    doc.animate(
      borderColorAnimation,
      borderColorTiming,
    ).finished.then(() => {
      return doc.animate(
        borderSizeAnimation,
        borderSizeTiming,
      );
    })
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2b3c4e;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input {
  border-radius: 3em;
  outline: none;
  border: 2px solid;
  border-color: white;
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  font-size: 2em;
  color: rgb(68, 68, 68);
  width: .15em;
}

::placeholder {
  color: darkgray
}
</style>
