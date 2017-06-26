<template>
  <div class="example">{{ msg }}</div>
</template>

<script>
console.log('Je suis vue')
export default {
  name: 'main',
  data () {
    return {
      msg: 'Hello Vueeee I love U!'
    }
  }
}
</script>

<style scoped>
.example {
  color: red;
}
</style>


