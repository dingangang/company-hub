<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
  //   function orient() {
  //     console.log(window.orientation)
  //     // alert('gete');
  //     if (window.orientation === 0 || window.orientation === 180) {
  //       window.orientation = 'portrait'
  //       return false
  //     } else if (window.orientation === 90 || window.orientation === -90) {
  //       let t = document.querySelector('body')
  //       t.classList.add('horizontal')
  //       debugger
  //
  //       return false
  //     }
  //   }
  //
  //   window.addEventListener('orientationchange', orient)
  }
}
</script>

