<template>
  <button
    class="
      p-2
      text-slate-600 hover:text-slate-800
      dark:text-slate-300 dark:hover:text-slate-100
      focus-visible:ring-2 focus-visible:ring-green-400
      rounded-lg
    "
    @click="toggleDarkMode"
  >
    <svg
      v-if="dark"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>


<script>
import { ref,onBeforeMount,onMounted, computed } from 'vue'
import { useStore, mapGetters, mapMutations } from 'vuex'
import router from '../router'

export default {
  computed: {
    ...mapGetters(['dark']),
  },
  setup(){
    const routes = ref([])

    //다크모드
    onMounted(()=>{
      if (localStorage.theme === undefined) {
        if (
          window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)')
            .matches
        ) {
          localStorage.theme = 'dark';
          this.SET_DARK(true);
        } else {
          localStorage.theme = 'light';
        }
      } else {
        this.SET_DARK(localStorage.theme === 'dark');
      }
    });

    return {
      routes,
      router, 
    }
  },
  methods:{
    // 다크모드
    ...mapMutations(['SET_DARK']),

    toggleDarkMode() {
      this.SET_DARK(!this.dark);
      localStorage.theme = this.dark ? 'dark' : 'light';
    },
  },
  
}
</script>
