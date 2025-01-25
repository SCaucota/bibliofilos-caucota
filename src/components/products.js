const products = [
  {
    author: "John Green",
    category: "romance",
    description: "Tapa dura. Edición 2012",
    id: "0",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735724/bajo_la_misma_estrella_kvks2g.jpg",
    movieAdaptation: true,
    new: false,
    price: 18000,
    raiting: 4.8,
    season: "invierno",
    stock: 200,
    title: "Bajo la misma estrella"
  },
  {
    author: "J.K. Rowling",
    category: "fantasia",
    description: "Tapa blanda. Edición 2018",
    id: "1",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/Harry_Potter_y_la_piedra_filosofal_rjsysk.jpg",
    movieAdaptation: true,
    new: false,
    price: 22000,
    rating: 4.6,
    saga: "Harry Potter",
    season: "invierno",
    stock: 350,
    title: "Harry Potter y la piedra filosofal"
  },
  {
    author: "Paula Hawkins",
    category: "misterio",
    description: "Tapa blanda. Edición 2020",
    id: "2",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735752/escrito_en_el_agua_mkdma9.jpg",
    movieAdaptation: false,
    new: false,
    price: 23450,
    rating: 4.7,
    season: "otoño",
    stock: 150,
    title: "Escrito en el agua"
  },
  {
    author: "J.R.R. Tolkien",
    category: "fantasia",
    description: "Tapa dura. Edición 2019",
    id: "3",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715802002/sa_h0azbz.jpg",
    movieAdaptation: true,
    new: false,
    price: 25000,
    rating: 4.9,
    saga: "El Señor de los Anillos",
    season: "invierno",
    stock: 300,
    title: "El Hobbit"
  },
  {
    author: "George R.R. Martin",
    category: "fantasia",
    description: "Tapa dura. Edición 2011",
    id: "4",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1737846347/1_ackra7.jpg",
    movieAdaptation: true,
    new: false,
    price: 30000,
    rating: 4.7,
    saga: "Canción de Hielo y Fuego",
    season: "invierno",
    stock: 500,
    title: "Juego de Tronos"
  },
  {
    author: "Jane Austen",
    category: "romance",
    description: "Tapa blanda. Edición 2015",
    id: "5",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715801854/orgypre_wnv1rc.jpg",
    movieAdaptation: true,
    new: false,
    price: 15000,
    rating: 4.5,
    season: "otoño",
    stock: 250,
    title: "Orgullo y prejuicio"
  },
  {
    author: "Dan Brown",
    category: "misterio",
    description: "Tapa blanda. Edición 2005",
    id: "6",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1737846437/2_t6ev6p.jpg",
    movieAdaptation: true,
    new: false,
    price: 22000,
    rating: 4.6,
    saga: "Robert Langdon",
    season: "primavera",
    stock: 350,
    title: "El Código Da Vinci"
  },
  {
    author: "Suzanne Collins",
    category: "ciencia ficcion",
    description: "Tapa blanda. Edición 2010",
    id: "7",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715735773/los_juegos_del_hambre_k6ljkx.jpg",
    movieAdaptation: true,
    new: false,
    price: 21000,
    rating: 4.8,
    saga: "Los Juegos del Hambre",
    season: "verano",
    stock: 280,
    title: "Los Juegos del Hambre"
  },
  {
    author: "George Orwell",
    category: "distopia",
    description: "Tapa blanda. Edición 2016",
    id: "8",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715802507/1984_j9wijn.jpg",
    movieAdaptation: false,
    new: false,
    price: 17000,
    rating: 4.9,
    season: "otoño",
    stock: 320,
    title: "1984"
  },
  {
    author: "Fiódor Dostoyevski",
    category: "clasico",
    description: "Tapa blanda. Edición 2014",
    id: "9",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1736784075/cyc_ma7v5l.jpg",
    movieAdaptation: false,
    new: true,
    price: 20000,
    rating: 4.7,
    season: "invierno",
    stock: 210,
    title: "Crimen y castigo"
  },
  {
    author: "Veronica Roth",
    category: "ciencia ficcion",
    description: "Tapa blanda. Edición 2012",
    id: "10",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1737846717/3_uoefwt.jpg",
    movieAdaptation: true,
    new: false,
    price: 19500,
    rating: 4.4,
    saga: "Divergente",
    season: "primavera",
    stock: 300,
    title: "Divergente"
  },
  {
    author: "Antoine de Saint-Exupéry",
    category: "fantasia",
    description: "Tapa blanda. Edición 2000",
    id: "11",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1736783933/el_principito_abdkis.png",
    movieAdaptation: true,
    new: true,
    price: 12000,
    rating: 4.9,
    season: "invierno",
    stock: 450,
    title: "El Principito"
  },
  {
    author: "Miguel de Cervantes",
    category: "clasico",
    description: "Tapa dura. Edición 2010",
    id: "12",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1715802508/mancha_v8pslw.jpg",
    movieAdaptation: false,
    new: false,
    price: 24000,
    rating: 4.8,
    season: "verano",
    stock: 200,
    title: "Don Quijote de la Mancha"
  },
  {
    author: "Stephen King",
    category: "terror",
    description: "Tapa blanda. Edición 1986",
    id: "13",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1736784027/it_kubuab.jpg",
    movieAdaptation: true,
    new: true,
    price: 26000,
    rating: 4.6,
    season: "invierno",
    stock: 250,
    title: "It"
  },
  {
    author: "Stephenie Meyer",
    category: "romance",
    description: "Tapa blanda. Edición 2005",
    id: "14",
    image: "https://res.cloudinary.com/dcwuqrvuv/image/upload/v1737846871/4_sgchba.jpg",
    movieAdaptation: true,
    new: false,
    price: 19000,
    rating: 4.2,
    saga: "Crepúsculo",
    season: "primavera",
    stock: 300,
    title: "Crepúsculo"
  }
];


export const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}

export const getSingleProduct = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const product = products.find(item => item.id === id)
      resolve(product);
    }, 2000)
  })
}

export const getProductsCategory = (category) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productsCategory = products.filter(item => item.category === category)
      resolve(productsCategory)
    }, 1000)
  })
}