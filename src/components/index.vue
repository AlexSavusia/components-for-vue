<template>
  <Header :user="user"/>
  <TopBanner  :spin="spin" :user="user"/>
  <BottomBaner :token ="token" :spin="spin" :user="user"/>
  <Footer/>
</template>
<script>
import Header from './Header.vue'
import TopBanner from './TopBanner.vue'
import BottomBaner from './BottomBaner.vue'
import Footer from './Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    TopBanner,
    BottomBaner,
    Footer
  },
  props: ['user', 'spin', 'free', 'token'],
}
</script>