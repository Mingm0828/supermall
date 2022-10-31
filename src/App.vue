<template>
  <div id="app">
    <router-view/>
<<<<<<< HEAD
  <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/context/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";

=======
<main-tab-bar/></div>
</template>

<script>
  import MainTabBar from './components/context/mainTabbar/MainTabBar.vue'
export default {
  name: "App",
  components:{
    MainTabBar,
  }
};
</script>

<style>
@import "assets/css/base.css";
>>>>>>> 1049041f2f0d320294b170adb2890e84194cacea
</style>
