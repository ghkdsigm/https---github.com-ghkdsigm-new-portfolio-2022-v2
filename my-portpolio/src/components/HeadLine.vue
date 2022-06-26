<template>
  <div class="lg:pr-14 pr-4 self-center mt-80 text-right">
    <router-link :to="route.path" :class="`transition-all ease-in-out linkWrap`" v-for="route in routes" :key="route">
      <div v-if="route.meta.isMenu">
          <i :class="route.icon"></i> 
          <span class="ml-5 text-7xl font-light hidden lg:inline-block navLink py-4">{{route.title}}</span>
      </div>
    </router-link>  
  </div> 
</template>

<script>
import { ref,onBeforeMount,onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import router from '../router'

export default {
  setup(){
    const routes = ref([])
    
    onBeforeMount(()=>{
      //routes.value = router.options.routes
      routes.value = router.options.routes.filter((route) => route.meta.isMenu == true)
    });
    return {
      routes,
      router, 
    }
  }
}
</script>

<style scoped>
  .navLink {    
    color: hsl(216deg 8% 12%);
    -webkit-text-stroke: 1px #fff;
    text-stroke: 1px #000;
  }
  .linkWrap:hover .navLink {
    color: #fff;
  }
</style>