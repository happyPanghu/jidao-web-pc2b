<template>
  <div>
    <Topbar></Topbar>
    <Navbar></Navbar>
    <AppMain></AppMain>
  </div>
</template>
<script>
import { AppMain, Navbar, Topbar } from '@/views/layout'

export default {
  name: 'layout',
  components: {
    Topbar,
    Navbar,
    AppMain
  }
}

</script>
<style>


</style>
