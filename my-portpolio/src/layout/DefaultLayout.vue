<template>
  <div class="flex h-screen mx-auto relative container">
    <!--사이드섹션-->
    <div class="w-1/6 p-5 flex h-screen items-center border-gray-200 dark:border-gray-800 text-center">
      <div class="flex flex-col text-center">
        <!--트위터 로고-->
        <router-link to="/">
            <i class="fab fa-twitter transition-all ease-in-out lg:text-3xl text-xl text-primary hover:text-dark lg:ml-4 mb-3"><span class="ml-5 text-lg font-light hidden lg:inline-block align-text-top">Hwang Seung Hyun</span></i>
            <p>Fronend Developer</p>
        </router-link>

        <!--사이드메뉴-->
        <div class="flex flex-col items-start space-y-3 lg:mt-4 lg:mb-4">
          <!-- <router-link :to="route.path" :class="`transition-all ease-in-out hover:text-primary hover:bg-blue-50 dark:hover:bg-gray-800 px-4 py-2 rounded-full  cursor-pointer dark:text-gray-300 ${router.currentRoute.value.name == route.name ? 'text-primary dark:text-primary'  : ''}`" v-for="route in routes" :key="route">
            <div v-if="route.meta.isMenu">
                <i :class="route.icon"></i> 
                <span class="ml-5 text-xl font-light hidden lg:inline-block">{{route.title}}</span>
            </div>
          </router-link>-->
        </div>
      </div>
    </div>
    <!--메인섹션-->
    <div class="w-5/6 flex-1 min-h-full scroll-smooth overflow-y-auto p-5 items-center text-center">
      <router-view></router-view>
    </div>
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

<style>

</style>