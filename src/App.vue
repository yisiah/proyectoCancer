<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/2">Registro</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  min-height: 100%;
  height: 100%;
}
</style>
