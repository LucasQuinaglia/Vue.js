// app.js
const HomePage = {
    template: `
      <div>
        <h1>Bem-vindo à HomePage!</h1>
        <p>Este é o conteúdo principal do nosso site.</p>
        <h2>O que é um SPA?</h2>
        <p>
          Um SPA (Single Page Application) é um tipo de aplicação web onde toda a navegação é feita dentro de uma única página. 
          Isso significa que, ao clicar em um link, a página não será recarregada. Em vez disso, o conteúdo é carregado dinamicamente, 
          proporcionando uma experiência mais rápida e fluida para o usuário.
        </p>
      </div>
    `
  };
  
  const AboutPage = {
    template: `
      <div>
        <h1>Sobre Nós</h1>
        <p>Somos uma empresa fictícia dedicada a entregar os melhores serviços!</p>
        <h2>Como funciona um SPA?</h2>
        <p>
          Diferente de sites tradicionais, onde cada clique geralmente carrega uma nova página do servidor, um SPA utiliza JavaScript 
          para carregar e atualizar o conteúdo de forma dinâmica, sem a necessidade de recarregar a página inteira.
        </p>
        <p>
          Isso resulta em uma navegação mais rápida, pois apenas as partes da página que mudam são recarregadas, e não toda a página.
        </p>
      </div>
    `
  };
  
  const ContactPage = {
    template: `
      <div>
        <h1>Contato</h1>
        <p>Entre em contato conosco pelo e-mail: contato@empresa.com</p>
        <h2>Vantagens de um SPA</h2>
        <p>
          As SPAs oferecem uma experiência de usuário mais rápida e interativa, já que a navegação entre as páginas é feita 
          de maneira instantânea, sem a necessidade de recarregar a página.
        </p>
        <p>
          Além disso, SPAs tendem a ser mais eficientes em termos de recursos, pois evitam múltiplas requisições ao servidor 
          para cada mudança de página.
        </p>
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
  