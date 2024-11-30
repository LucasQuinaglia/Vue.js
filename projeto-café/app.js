// app.js
const HomePage = {
    template: `
      <div>
        <h1 class='titulo'>Bem-vindo à Cu Coffee House!</h1>
        <p class='titulo'>O melhor lugar para saborear um café de qualidade!</p>
        
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
          { "id": 1, "name": "Café Espresso", "description": "Café forte e encorpado, perfeito para quem ama intensidade.", "price": "8.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/nutty%20latte%20900x900_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=f%2Fjeh9iezhKHfZFSWBiwcxfbpWQM8OVUrZxGYyN9QcAv1NlKrjZaIAZTt8c7HYOf15C4d6GIdNXIlv%2BOprx5EJeWtqv8mxRUiwgOgAtEpydUc1lUfYkFjU1FW1BZFOT2WmlLqCkZSBQiMVxGNJ5%2F1bhVEkUhFPXv86MDeciaHdAgkIWiXGCnlx5gaxIpPh4Tt%2FlSEnbIxfmWEwxKpvOsEWj3dsmHCAjspXqFREr%2FOurBpe6LDFDj2b61786h1CEBPt7nBSB28bMJlAmY2AeRPjMtdZVBY%2BbDoxnogWSdGxFImJ1MEKgwxcqiCdyt%2Frw4Habow2j9bchtQ%2Bo9av01dg%3D%3D"  },
          { "id": 2,  "name": "Café Latte", "description": "Café com leite cremoso, ideal para uma pausa relaxante.", "price": "12.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/nuticedlatte__07b1c76cd1b2517d3ec15fb5e617fdd3_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=jzLT3%2FoVrV0mLlHpDh%2B79pvwlIjex9AeLGsa%2FOCVarcc0sJ8Ei9hqsGydwxbWh6f2TlS7CmbIRxVSubKQs4Pd5Aib4O1H3oE1BT9a8c4tW8SQhvrz5jbzoO8EPiDgH984Sgu048Eyh7nDPj5N7OEEanXB7aQ3vJ4XJgMlNA0PLKzUt81yDAjzTCfxIRt8wxKp0PQyNNe8GhI4qWCnu6nibGdI8OI%2FYDxhSUrBSjil6VIRAYaEAJy831PVJWkMgYdgrj5JCjU5g0nXW5%2B0tmBk16GmvTq74QPbQ2jBL3Bnl9uaEo2M5%2FKDUr0NyyIyXSKKatzs9xJ3MntVBeAropCFw%3D%3D" },
          { "id": 3, "name" : "Cafe Mocha", "description": "Mistura de café com chocolate quente, para os amantes de chocolate.", "price": "15.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/sora%20latte%20900x900_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=GxGBPGehLb6MJ36tB2u9NhIZdunhr3cPzpMIkUgic6bDrqFUTO%2BTznXPkfHWrQemenOYOnH%2FLr2k7CXKI3xKfvQjGMP9lQfnqlCHvjL5UcOF6lhnHN2ZeiuyXuy0l2RY00O7TCPFD4kXXdc12%2FdxnGCGCSeH2WOg65qUdS8Y7S9MZ3JWsXLfhIStDK3cId3Ktp%2BNe%2BoYXSAhd6btoVEOGE11elSX2ddLBti69qYfgw4TDR5vIUf540WOiZqZUw8o7AIMag%2FA7CuVEZs4x%2FacGxHkzPxB3bCgNuQVji43hx7e04bk9a7foIdN%2BUYVi6alokLJF6aQO9KT3TA5ZKw7nQ%3D%3D"},
          { "id": 4, "name": "Café Americano", "description": "Café suave e leve, ótimo para o dia a dia.", "price": "7.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/457371263-548362814426423-375615897829087170-n__8bc5766936b3c42ae7c06e877accdf48_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=QIhEHXR%2FIJnUEh87MVRCEeZHRkF4ZjQMJTf%2F7VlpTHYSvqL3VRoe9KcHhVzwTa38%2FFK1pMJG8Cj1MHJbgrsYSY8HVdoQmwu87yDsHodx7%2Bw%2BEGPC5wj4OBSwRvCIRm4mrjESDnfFnML5E9wfByVAQnAukDWEo5pxr4HL9QBaZGf0jIP3tUuAoES18lsai5NKCP3lcTKLhZm2qHHEBzF6kVWrRVsPtwz059oQaCaa7eQaCz4%2BrlwDXuxdV7dxJ9rcS%2FxR79hlXX2FHMk4wUmXQKbUL8T0Th%2FbL%2BasS%2Bpxe6FpCCRhNv18z%2Fxn9sxOeO1PRbmUAOtmaa8Q0o25CVtevA%3D%3D" },
          { "id": 5, "name": "Café Capuccino", "description": "Mistura de café, leite vaporizado e espuma cremosa.", "price": "14.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/462405481_464276746625736_7217366610090671877_n_480x480.png?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=N%2B%2BhgXy%2B2qwy2iSHrv%2Fl9nEhfDS4px72PGjMD4QqzKIJpgAQFNiXS02rv1rAKKx2y7XwzwZSnyo0Ol%2Fm5zjmD7tZCJw5x4iQHn4QqzgRd089prkOnmSc%2FIG4H6JeWs%2Bjiikud2cBYRoVSr4MREQIx0e8vBt%2FLIfoR%2F4BdAQfJ3rZhsf6GLxi6j%2F7CDUzqKfdLQE8DvLhAIpDsJFiZ7Sd6DcDz9QHnr0N2VSG1tY%2F3pDcbM2zxk456fNdve4ulK7gsp6aP9L6EqMUk4IcpIfMJdjKVKIbTXclWBgEThaJp4dgDjkJ5jxyxtadpUZ32v3TjvStyavKCt5pRApf%2BAIHTw%3D%3D" },
          { "id": 6, "name": "Café Gelado", "description": "Café servido gelado com gelo e leite, perfeito para o verão.", "price": "10.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/462552283_1779211016166292_1741238111509008358_n_480x480.png?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=NuRgVuypOU%2FrLig9%2BGv2FZIoZD0ImEapbSWtWXGc%2FqLGylQpAaNZfpGTE6we9DzbZ5J1UoxdTd%2Fb3mmfUzYqeMdoDo05CoZHzMJvqXgu2qFV3ISlwQg9txyIfYRClWkRLEM5AnGvFCDcEol9QKVWTEmnmrNijbO7%2B%2FIdAumlU1ojVY4o7QH6dAFzmjyO5xPfHjfxB8uaxRck%2BOXmDYPxkmF4j1jjjKYXjSKTy7zDQJu18zoBf0HhXRSd3NGBVAMNbc%2F7ygCCadkmufBD8Ph%2FTLMT%2B5zVXOKDTBeHpUgd3a1ft%2BUUWmz2vJDqy6Rfg5zAdZIqIaAdBtOZZ3RNlxaBiw%3D%3D" },
          { "id": 7, "name": "Café com Leite", "description": "Café misturado com leite quente para um sabor suave e agradável.", "price": "9.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/black-iced-latte-900x900__e421ea94830e7f54878592076c5b1a06_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=U%2Fnthq4Qz5ZA6qHLD5GzHmDtWxyr%2Ff1YiDYqFYpSVwt6D1ruEDeqW0l%2FsFCd2NtcgibosrXgUdjqvIu5xpcdPLvDOh5RtJM5YO6plgNlCEh2uyhUEuWLgKvabnqBGIz4AmY4RtBQxeNTcdGQ1pmwZZWIXeaFflYHCoFq4TFed6GBXxmKUhwMY0qNjcycx5fhhCwiJ2OpieWD%2BWLM%2F0X2K40GSMMZ7M49k1DG42LJqIMJ2zKt3uFjkuIK6cQdB%2FUoVxdDcPrGzT04SGW2S1Hp0Z9yNnUmGl66XjKRmZgPv8S06Iqqv77ZoB1AJJFZOEg47tvWluBNc%2FaLFw7xaM5JnQ%3D%3D" },
          { "id": 8, "name": "Café Irish", "description":  "Café com um toque de whisky, perfeito para uma noite especial.", "price": "18.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/461643006_1086937836191201_6108961319035128829_n_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=i99FFJ82W2pCeVkYrKNdGz9eZNNLoHrAUJxnYNmq2PJNo7GWogBbtnMf2ZBfHMfSAIRYzJnOAWbHcEdtxwFYAhwd7%2FpdyosXlEOmsKjBCigbmqgE1ITTAkbSzD2SiT81Rhq2XWjrmgjzLQiax9h0DDLVHBfVL%2BRb%2F2ebXyxhSWUVkyQx40VD1pkfnuFzOHGNWIyD2cybgxeLyq%2BhCGPxY3ymbUAwDEpQOiz7zwLTTiXWU7f5%2F8A6Y84x1otY8SBxkYAZyitzLm%2Fdr4YNR210fGi7RDGsbO8ZD9nBDgJOssV8rlMy8cFeCcR2n2T9tRf0uCB4%2FFj%2BIEHMDyxoe70tEQ%3D%3D" },
          { "id": 9, "name": "Café Arabica", "description": "Café com grãos 100% Arábica, suave e aromático.", "price": "12.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/462546018-1283676169751219-6625614011111442011-n__9e99d2569e08184e9a7a4f999b77200a_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=TjbnBouTKcYOOP4HJEUQCuAO0qkFRdtjeU0FvB%2BKS8h6fuPW3YYgeLdUf8cW6GOMwNjKUqxZaieeoKC46m%2FFLlu%2BzJWzXt8Cy3v945srfi%2BF18Qe1avDXJtLj1QJWu%2Fa5gr12dDuPeOXcMgNj%2FuSxeWI2%2FZF05qIbzqV4igwj6C7VQcskt%2BFWvHkMihSvX8xSkkaBKIpViIAraynMbP%2BsJQJUoK3HY%2B%2BsTRm9icjfashJy0aC%2FqNtU1lbbQZvJbVCttpXQpM%2BRKZvq4P%2Fe%2BnPF7OI%2FwZ8BK8IkRtQjyN%2BsaCc0b65VnMuIpEZ4Nc0Q3m1ZxLkxWY%2FLjaflBKQmjItw%3D%3D"  },
          { "id": 10, "name": "Café de Grão", "description": "Café feito com grãos frescos moídos na hora.", "price": "15.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/467473862-928378188733806-2245058625957961258-n-1__30aa1fc0184a816122bd7e41bda51ebd_480x480.png?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=fOIe%2FQthXYX7AmaEINLl8m0cZMR2%2BmOooXwuGBXk6spHlHF5xuYx41nLOW4fHY5vtVx4btR01LrbamWS%2Frt8YbQASm4cY6XYxjXiAFB3I0YuBD5cKvmha8zxrwWnlj2%2BYUkDekoYC6JmVCMnw3Erm4JEb6ECPw0dnTzpGoxNwQLDGrYZhPeJpcA9sMjwWNcg15qhUf3X25Jb9uZwK5VG%2BJc0gBIqVNLplFwRKPMHL8vIWX5Gfu2NdyX%2FfN1pIvqpXXfUsv0lxc%2F2aTolyWag4PbaHKBu%2BBx4ZrS6i5%2FhkjsnJ5x15wGHX9V54h0KqfNdbS2SyH5cibBLk7X5NNmc1Q%3D%3D" },
          { "id": 11, "name": "Café Com Amaretto", "description": "Café aromatizado com licor Amaretto.", "price": "18.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/purista-americano_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=Bx5LvWiN0OukKe0y4brLZnEUgDtkt%2F8ZzBg%2FzkoGlQxyPuPYfR25%2BWbMrdYKW97X4m8VhUXqojpab1KQPzHVMeGrXjOiaTssB9TMpHkVP8mXVDZnO2G2bJKiCZ6J9XNXsjoNW5GpmBG449e4hq6Q%2FPs0PuoMT0mOww2aHco3Z2WEehPk738i5aGQQ4n5wn%2BIc9rcvOSK2jKKZRfdUbQ%2Bp0nfVOhLNnRsvvfa%2FZnP9Oz%2FzXNpJzATK%2BBeFuU87B9yZlx5ZKNEQwgpDgSzMm32Jv3gxUPEGeaEiFDkBGFhO8g1oorrfZ52WI3TuSCGCT2mkTisEwvDAaM8wLklzYkMPQ%3D%3D" },
          { "id": 12, "name": "Café Espresso Duplo", "description": "Versão mais intensa do clássico Espresso, com o dobro de café.", "price": "9.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/Foto%20Pure%20Black%20com%20chocolate_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495795&Signature=nQ7vR%2B1qTfWAW%2BQWseUJHXQdxffC035m2Z8On9h569n0hkaMIWGfaEShEwagiHNFMu8fLZ1QSJJjoQkNgUvwo9RFeI6EvuPWjDMJaqcAwMCWcH%2FNQG4qFZBXuDIJn15kPr5oo9ANvMWhMhUri2nYRUTZZxdXNQYEPbwlfNuaGVf5TDYYq5tv1vo1Ceo48cGGJeWl6AYB44Td2NAr04wv4bfN13VQny8%2B7RrdNfOufLJ7N%2B2WhUMY69d4CmEPmv4x7ChNmkcvvg4OXetg9rfdBJlHoNZ79JW6aeEoLnKo1hbcIMnGPaXUk0S8xxc%2FOvYAXEVt5hHSPXoI4oew5R3fsg%3D%3D" },
          { "id": 13, "name": "Café Flat White", "description": "Semelhante ao Latte, porém com menos espuma e mais café.", "price": "13.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/coado-gelado_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495796&Signature=W4MQjOGrVhBaW%2FgtPYfktRsykKkLJ6fGUKc%2BVbNy6asYdXn43xCAcAX0hGc5l%2B7BU1BPtv1fZBAA73HWpp8fLeLBflKF5IWQmPtqt9YR%2F%2FB7%2BWETe3ELlyEyWIafkTOAL72uXRBHtXXXtwsUgp9rfeKAXdHQcH%2Bu3UWHuTI%2F8t3OcdadbA4hj98uuu%2Fo%2BfOaiOVjPYkszpExMtNVNEhSLvdscJPxuxsjYHi1%2BOhF0eFYezeUPm509j1cW1eMzqcMjipVs12z22Cf3YndYLkz6QxGL2LXvnYHxbbcT%2BM9SlAfFpQgK0dO0qO1b9wT8%2FwjBehmvuHdJGWGMGG4YoamZw%3D%3D" },
          { "id": 14, "name": "Café Cold Brew", "description": "Café preparado a frio, suave e refrescante.", "price": "12.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/quente-caffelatte-900px_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=C3KhABFEllh6HsY5j%2BKd%2FW9yVHwa3cWej%2FrZyopA1T%2FQQxGhRShTRWJhRNeJORUNpxnbulkDlnQhT4lMO857bYGGQQuwDCoShKRwxjxdc5luAvrnNc%2BW9EgBiL4V23dz9bmdQBnIq5tvntHWxu2q5sCdeiZsLccgEG%2FCGvcd926glwRwmTKeY3lK92sQR1OJKnlNQrz6IIgjFMt9pxRDAJA7UHB61IaSo0GvYEAIp6qEt7P3gaor62vj9MO39n6ofPMIpmavIj4Oy6ymyFHatA6%2BxiaawnPmQaKxYpi3q5a%2BMdsZP%2Bao1IN92%2F5rZECWFid%2BRT2ZQvNut4N3DKxHjA%3D%3D" },
          { "id": 15, "name": "Café Sombra", "description": "Café gelado misturado com chocolate e leite.", "price":  "16.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/cappuccino_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=KhK%2FvUnMHZ0N%2Ffqjh%2BwprpkTLIQ4uHnsjxnA0U0x4K59EcRJPBWi0w1LS%2FqZBumxzsy4%2F2SCN1nMWsjeHVVtFgNPnFFst%2FZD0RlHUdLJ1mXrYMCYw%2B%2FZiy%2FLiAE7eDP%2Fyw8WCrniL6LfCNp%2Fk%2FTyLQ7EnVBBZOEeZxhz3eiZzJxGdMK0mqhcz79XthpMF6h8we3zZdYOLdIJFwJ58F9EJvN2wGfuns4k%2FYE4%2FEUjb3HH0lIkim5ryVgdEh7LxuGpGJHFxBM%2BowMRabU45%2FFUUWLFs6w1GdDBLu9Np0qMetb2mxHxCsCtO%2FTHeVMikpXj5WtJP1MeKG6lkMnwgFQDcg%3D%3D" },
          { "id": 16, "name": "Café Vênus", "description": "Café suave com toque de baunilha e caramelo.", "price": "14.00", "image": "https://storage.googleapis.com/thecoffee-ws/images/quente-truewhite_480x480.jpg?GoogleAccessId=thecoffee-ws%40thecoffee-gke.iam.gserviceaccount.com&Expires=1733495794&Signature=NVk9XmsG4G2y3hkG8AjYtlOFOWx7lr0tb4k%2B7PhS5t2Lh68bqQljDbtYsiFL%2FtG7aqoDHtwxrnF68sQ1Y%2Bt06i970e5YtIWeFRBy5WvDNkuVwXXnXvg4wXFoj8baVYftJuN1ESuOkDYU%2BxhIi0JcCzLDKAT3xokfDHurnGxwybzACqc7rK4GVrEYXcB30ZI7X9r%2BeUBxgxPMRfJ%2BWEcgTHBau7Q3dvR6VCdOMDAzS76APok1uJ7UOJOAd6c%2Fsm%2BbYx0xVlOeKJ5Eq%2Fq%2F8Pr9nZGAoddlR9ke8eF3%2BMWJURKTquO6GcGjtC5JIUdQBSgEwtHTsYEJujwxSiaTLZGu9A%3D%3D" }
  ]
      };
    }
  };
  
  const AboutPage = {
    template: `
      <div>
        <h1 class='titulo'>Sobre a Café & Cia</h1>
        <p>A Café & Cia é uma cafeteria fictícia que oferece uma experiência única para os amantes de café.</p>
        <p>Fundada em 2024, nossa missão é trazer cafés especiais de várias partes do mundo, preparados com o maior cuidado.</p>
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
  