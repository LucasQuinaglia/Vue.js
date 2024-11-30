  const app = Vue.createApp({
    data() {
      return {
        currentPage: 'home'
      };
    },
    computed: {
      currentComponent() {
        switch (this.currentPage) {
          case 'about':
            return AboutPage;
          case 'contact':
            return ContactPage;
          default:
            return HomePage;
        }
      }
    }
  });
  
  app.mount('#app');
  