<template>
<div id="app">
	<v-app>
    <Header />
    <router-view></router-view>
    <Footer />
	</v-app>
</div>  
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components :{
    Header,
    Footer
  },
	data() {
		return {
			showPassword: false
		}
	}
}
</script>