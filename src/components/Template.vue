<!-- Komponen template, digunakan untuk mensimulasikan tampilan komponen di bawah rute yang berbeda -->
<template>
  <div class="router-template">
    <div class="template-wrap">
      {{$route.name}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {};
    }
  }
</script>
<style>
  .router-template {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    height: 100%;
  }
  .template-wrap {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
</style>
