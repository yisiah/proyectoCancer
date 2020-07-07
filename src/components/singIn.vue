<template lang="html">
  <div>
    <h1>{{titulo}}</h1>
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="success">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
        titulo: "Hola"
    }
  }
}
</script>

<style lang="css" scoped>
</style>
