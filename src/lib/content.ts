/*
  ============================================================
  CENTRAL CONTENT FILE  ·  ARCHIVO CENTRAL DE CONTENIDO
  ------------------------------------------------------------
  This is the ONE file to edit for almost any text change:
  business info, menu items, prices, locations, FAQs, etc.
  Items marked  // TODO  need real data from Giovanni.
  ============================================================
*/

export const site = {
  name: "Trattoria Giovanni",
  tagline: "La experiencia de la cocina italiana en tu evento",
  heritage: "Más de 33 años de tradición gastronómica italiana",

  // Contact — TODO: confirm these are final
  phone: "+52 228 334 3113",
  phoneRaw: "522283343113", // digits only, used by WhatsApp link
  email: "giuseppepeka@gmail.com",
  whatsappMessage:
    "¡Hola! Me gustaría información sobre el servicio de catering de Trattoria Giovanni.",

  // Social — TODO: add real profile URLs (leave "" to hide)
  instagram: "",
  facebook: "",

  // Integrations — fill these in when accounts are ready
  // TODO: paste the public Cal.com booking link, e.g. "giovanni/llamada"
  calcomLink: "",
  // TODO: paste the Web3Forms access key (free, from web3forms.com)
  web3formsKey: "",
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Galería", href: "/galeria" },
  { label: "Ubicaciones", href: "/ubicaciones" },
  { label: "Reservar llamada", href: "/reservar" },
  { label: "Contacto", href: "/contacto" },
];

export const hero = {
  eyebrow: "Catering Italiano para Eventos",
  title: "Cocina italiana auténtica, llevada a tu evento",
  subtitle:
    "Pizzas al horno de leña preparadas en vivo, pastas artesanales y menús a la medida para bodas, eventos corporativos y celebraciones inolvidables.",
  primaryCta: { label: "Solicitar cotización", href: "/contacto" },
  secondaryCta: { label: "Ver el menú", href: "/menu" },
};

export const services = [
  {
    title: "Pizzas al horno de leña",
    description:
      "Horno de leña montado en tu evento. Pizzas artesanales preparadas y servidas al momento frente a tus invitados.",
  },
  {
    title: "Menús buffet italianos",
    description:
      "Buffets completos de cocina italiana para grupos a partir de 30 personas, con pastas, ensaladas y más.",
  },
  {
    title: "Food truck móvil",
    description:
      "Servicio de food truck con instalación, montaje y limpieza incluidos. Llegamos a donde sea tu celebración.",
  },
  {
    title: "Menús personalizados",
    description:
      "Diseñamos el menú a la medida de tu evento. Paquetes desde $349 por persona con servicio profesional.",
  },
];

// Highlighted package shown on the home page
export const featuredPackage = {
  name: "Paquete a la medida",
  pricePerPerson: "$349",
  includes: [
    "6 estilos de pizza artesanal",
    "2 tipos de pasta",
    "1 ensalada fresca",
    "Bebidas",
    "Personal de servicio profesional",
    "Montaje y limpieza",
  ],
  note: "Mínimo 30 personas. Menús adaptables según tu evento.",
};

// ---- MENU PAGE ----  (catering offering, not the restaurant menu)
// TODO: confirm full list, descriptions and prices with Giovanni
export const menu = {
  intro:
    "Estas son nuestras opciones para catering de eventos. Combinamos los platillos a tu gusto para crear el menú perfecto.",
  categories: [
    {
      name: "Pizzas al horno de leña",
      items: [
        { name: "Margherita", description: "Salsa de tomate, mozzarella fresca y albahaca." },
        { name: "Prosciutto", description: "Jamón serrano, mozzarella y arúgula." },
        { name: "Diavola", description: "Salami picante, mozzarella y salsa de tomate." },
        { name: "Quattro Formaggi", description: "Mezcla de cuatro quesos italianos." },
        { name: "Funghi", description: "Champiñones, mozzarella y aceite de trufa." },
        { name: "Vegetariana", description: "Vegetales asados de temporada." },
      ],
    },
    {
      name: "Pastas artesanales",
      items: [
        { name: "Spaghetti Bolognese", description: "Ragú de res cocido a fuego lento." },
        { name: "Penne Alfredo", description: "Crema, mantequilla y parmesano." },
        { name: "Lasagna", description: "Capas de pasta, ragú y bechamel." },
        { name: "Ravioli", description: "Rellenos de queso ricotta y espinaca." },
      ],
    },
    {
      name: "Ensaladas y complementos",
      items: [
        { name: "Ensalada Caprese", description: "Tomate, mozzarella fresca y albahaca." },
        { name: "Ensalada César", description: "Lechuga romana, crutones y aderezo César." },
        { name: "Pan de ajo", description: "Pan artesanal con ajo y hierbas." },
      ],
    },
  ],
};

// ---- LOCATIONS PAGE ----
// TODO: replace with the 3 REAL restaurant addresses.
// The "mapsQuery" is just the text Google Maps will search for.
export const locations = [
  {
    name: "Trattoria Giovanni — Centro",
    address: "Xalapa-Enríquez, Veracruz",
    mapsQuery: "Trattoria Giovanni Xalapa Veracruz",
  },
  {
    name: "Trattoria Giovanni — Sucursal 2",
    address: "Dirección por confirmar",
    mapsQuery: "Xalapa Veracruz",
  },
  {
    name: "Trattoria Giovanni — Sucursal 3",
    address: "Dirección por confirmar",
    mapsQuery: "Xalapa Veracruz",
  },
];

// ---- TESTIMONIALS (home) ----
export const testimonials = [
  {
    quote:
      "Las pizzas fueron el alma de nuestra boda. Los invitados no paraban de elogiarlas.",
    author: "Novios de boda",
  },
  {
    quote:
      "Servicio impecable y profesional para nuestro evento corporativo. Repetiremos sin duda.",
    author: "Coordinadora corporativa",
  },
  {
    quote:
      "Auténtica cocina italiana preparada al momento. Una experiencia que nuestros invitados recordarán.",
    author: "Organizadora de eventos",
  },
];

// ---- FAQ (home) ----
export const faqs = [
  {
    question: "¿Para cuántas personas dan servicio?",
    answer:
      "Atendemos eventos a partir de 30 personas, y nos adaptamos a celebraciones de cualquier tamaño.",
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "Nuestros paquetes personalizados inician desde $349 por persona. El precio final depende del menú y el número de invitados.",
  },
  {
    question: "¿Qué incluye el servicio?",
    answer:
      "Incluimos el montaje del horno de leña, la preparación en vivo, el personal de servicio profesional y la limpieza al finalizar.",
  },
  {
    question: "¿En qué zonas dan servicio?",
    answer:
      "Damos servicio en Xalapa y zonas cercanas con nuestro food truck móvil. Consúltanos por la ubicación de tu evento.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar?",
    answer:
      "Recomendamos reservar con la mayor anticipación posible para asegurar tu fecha. Contáctanos y con gusto revisamos disponibilidad.",
  },
];

// ---- GALLERY ----
// Place image files in /public/gallery and list their file names here.
// TODO: replace with Giovanni's real photos.
export const gallery: { src: string; alt: string }[] = [
  { src: "/gallery/placeholder-1.svg", alt: "Pizza al horno de leña" },
  { src: "/gallery/placeholder-2.svg", alt: "Pasta artesanal italiana" },
  { src: "/gallery/placeholder-3.svg", alt: "Montaje de evento" },
  { src: "/gallery/placeholder-4.svg", alt: "Horno de leña en vivo" },
  { src: "/gallery/placeholder-5.svg", alt: "Buffet italiano" },
  { src: "/gallery/placeholder-6.svg", alt: "Detalle de servicio" },
];
