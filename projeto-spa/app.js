// app.js
const HomePage = {
    template: `
      <div>
        <h1>Bem-vindo à HomePage!</h1>
        <p>Este é o conteúdo principal do nosso site.</p>
      </div>
    `
  };
  
  const AboutPage = {
    template: `
      <div>
        <h1>Sobre Nós</h1>
        <p>Somos uma empresa fictícia dedicada a entregar os melhores serviços!</p>
      </div>
    `
  };
  
  const ContactPage = {
    template: `
      <div>
        <h1>Contato</h1>
        <p>Entre em contato conosco pelo e-mail: contato@empresa.com</p>
      </div>
    `
  };
  
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
  