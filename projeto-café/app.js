// app.js
const HomePage = {
  template: `
      <div>
        <h1 class='titulo'>Bem-vindo à Café & Cia!</h1>
        <p class='titulo'>O melhor lugar para saborear um café de qualidade!</p>
        
        <h2>Nosso Menu de Cafés</h2>
        <div class="menu-grid">
          <div class="card" v-for="coffee in coffees" :key="coffee.id">
            <img :src="coffee.image" alt="Imagem do café" class="coffee-image">
            <h3>{{ coffee.name }}</h3>
            <p>{{ coffee.description }}</p>
            <p class="price">R$ {{ coffee.price }}</p>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      coffees: [
        { id: 1, name: 'Café Espresso', description: 'Café forte e encorpado, perfeito para quem ama intensidade.', price: '8.00', image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Café Latte', description: 'Café com leite cremoso, ideal para uma pausa relaxante.', price: '12.00', image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Café Mocha', description: 'Mistura de café com chocolate quente, para os amantes de chocolate.', price: '15.00', image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Café Americano', description: 'Café suave e leve, ótimo para o dia a dia.', price: '7.00', image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Café Capuccino', description: 'Mistura de café, leite vaporizado e espuma cremosa.', price: '14.00', image: 'https://via.placeholder.com/150' },
        { id: 6, name: 'Café Gelado', description: 'Café servido gelado com gelo e leite, perfeito para o verão.', price: '10.00', image: 'https://via.placeholder.com/150' },
        { id: 7, name: 'Café Caramel', description: 'Café com um toque de caramelo doce, para um sabor único.', price: '13.00', image: 'https://via.placeholder.com/150' },
        { id: 8, name: 'Café Filtrada', description: 'Café filtrado, leve e suave, perfeito para degustação pura.', price: '9.00', image: 'https://via.placeholder.com/150' }
      ]
    };
  }
};

  const AboutPage = {
    template: `
        <div class='sobre'>
          <h1 class='titulo'>Sobre o Cu Coffe House</h1>
          <p>O Cu Coffe House é uma cafeteria fictícia que oferece uma experiência única para os amantes de café.</p>
          <p>Fundada em 2024, nossa missão é trazer cafés especiais de várias partes do mundo, preparados com o maior cuidado.</p>

          <h2>Nossos Valores</h2>
          <ul id='lista-sobre'>
            <li>Café de Qualidade</li>
            <li>Atendimento Personalizado</li>
            <li>Ambiente Aconchegante</li>
            <li>Sustentabilidade</li>
          </ul>

          <h2>Nossa Equipe</h2>
          <p>Nossa equipe é formada por baristas especializados, prontos para preparar o café perfeito para você.</p>
          <p>Estamos sempre em busca de novos talentos, então se você ama café, venha fazer parte do nosso time!</p>

          <h2>Localização</h2>
          <p>Estamos localizados na Rua dos Cafés, 123, na cidade de Coffeeville.</p>
          <p>Visite-nos e descubra o melhor café da região!</p>
          <img src="./imagens/cu coffe house.png" alt="Cafeteria Cu Coffe House" class="cafe-image">

        </div>
      `
  };

const ContactPage = {
  template: `
      <div>
        <h1 class='titulo'>Contato</h1>
        <p class='titulo'>Tem alguma dúvida ou deseja fazer uma encomenda? Entre em contato conosco!</p>
        <p>Telefone: (11) 1234-5678</p>
        <p>Email: contato@cafeecia.com.br</p>
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
