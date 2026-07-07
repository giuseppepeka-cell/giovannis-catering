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

  // Social — leave "" to hide
  instagram: "https://www.instagram.com/trattoria.giovanni/",
  facebook: "https://www.facebook.com/trattoriagiovannixalapa",

  // Integrations
  // Cal.com booking path (everything after cal.com/) — booking captures the
  // customer's phone so Giovanni calls/WhatsApps them back. No video.
  calcomLink: "giusepeka-27-3v4oju/llamada-de-cotizacion",
  // Web3Forms access key (free, from web3forms.com) — public by design
  web3formsKey: "ae1f3e1d-6210-43fb-a816-29c97430dd64",
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Menú", href: "/menu" },
  { label: "Paquetes", href: "/paquetes" },
  { label: "Galería", href: "/galeria" },
  { label: "Ubicaciones", href: "/ubicaciones" },
  { label: "Reservar llamada", href: "/reservar" },
  { label: "Contacto", href: "/contacto" },
];

export const hero = {
  eyebrow: "Catering Italiano para Eventos",
  title: "Cocina italiana auténtica, llevada a tu evento",
  subtitle:
    "Pizzas al horno de leña preparadas en vivo, pastas artesanales, ensaladas frescas, bebidas y menús a la medida para bodas, eventos corporativos y celebraciones inolvidables.",
  // Primary CTA now opens WhatsApp (link built from site.phoneRaw in the page).
  primaryCta: { label: "Cotiza por WhatsApp", href: "/contacto" },
  secondaryCta: { label: "Ver el menú", href: "/menu" },
};

// ---- BOOKING PROCESS (home, timeline under hero) ----
export const process = {
  steps: ["Cotiza", "Degusta", "Reserva", "Disfruta"],
  note: "Sin compromiso",
};

// "image" = path under /public (e.g. "/services/pizza.jpg"). Leave "" to show
// a styled placeholder until Giovanni's real photos arrive.
export const services = [
  {
    title: "Pizzas al horno de leña",
    description:
      "Horno de leña montado en tu evento. Pizzas artesanales preparadas y servidas al momento frente a tus invitados.",
    image: "/pizza.jpg",
    imagePosition: "center",
  },
  {
    title: "Buffet italiano personalizado",
    description:
      "Buffets completos de cocina italiana para grupos a partir de 30 personas, con pizzas, pastas, ensaladas y más.",
    image: "/buffet.jpg",
    imagePosition: "center",
  },
  {
    title: "Food truck móvil",
    description:
      "Servicio de food truck con instalación, montaje y limpieza incluidos. Llegamos a donde sea tu celebración.",
    image: "/food-truck.jpg",
    imagePosition: "center",
  },
  {
    title: "Personal de servicio capacitado",
    description:
      "Nuestro equipo profesional se encarga del montaje, el servicio durante el evento y la limpieza final, para que tú solo te dediques a disfrutar con tus invitados.",
    image: "/personal.jpg",
    imagePosition: "top",
  },
];

// Highlighted package shown on the home page
export const featuredPackage = {
  name: "Paquete Clásico",
  pricePerPerson: "$349",
  includes: [
    "6 estilos de pizza artesanal",
    "2 tipos de pasta",
    "1 ensalada fresca",
    "Bebidas",
    "Personal de servicio profesional",
    "Montaje, transporte y limpieza",
  ],
  note: "Mínimo 30 personas. Menús adaptables según tu evento.",
};

// ---- PACKAGES PAGE ----  (/paquetes)
// Prices are per person (MXN). `highlight` marks the featured card.
// `tag` shows a small badge; `note` shows a small line under the price.
export const packages = [
  {
    name: "Paquete Clásico",
    price: "$349",
    unit: "por persona",
    guests: "De 30 a 100 personas",
    tag: "Más popular",
    highlight: true,
    description:
      "Nuestra experiencia italiana completa, servida en tu evento: pizzas al horno de leña preparadas al momento, pastas, ensaladas y más.",
    includes: [
      "6 especialidades de pizza artesanal al horno de leña",
      "2 tipos de pasta",
      "Ensaladas frescas",
      "Bebidas",
      "Complementos",
    ],
    note: "",
  },
  {
    name: "Paquete Grande",
    price: "$329",
    unit: "por persona",
    guests: "A partir de 100 personas",
    tag: "Mejor precio",
    highlight: false,
    description:
      "El mismo menú completo del Paquete Clásico, con un precio preferencial pensado para eventos grandes.",
    includes: [
      "6 especialidades de pizza artesanal al horno de leña",
      "2 tipos de pasta",
      "Ensaladas frescas",
      "Bebidas",
      "Complementos",
    ],
    note: "Todo lo del Paquete Clásico, a mejor precio por persona.",
  },
  {
    name: "Taller de Pizza",
    price: "$299",
    unit: "por persona",
    guests: "A partir de 30 personas",
    tag: "Experiencia interactiva",
    highlight: false,
    description:
      "Una dinámica distinta al catering tradicional. Tus invitados aprenden a preparar auténtica pizza italiana en horno de leña —desde estirar la masa hasta hornearla— guiados por nuestro pizzaiolo. Ideal para cumpleaños infantiles, actividades familiares o team building corporativo.",
    includes: [
      "Taller de pizza guiado por nuestro pizzaiolo",
      "Todos los ingredientes frescos",
      "Tu propia pizza, recién salida del horno de leña",
      "Transporte del remolque con horno de leña",
      "Experiencia completa de principio a fin",
    ],
    note: "",
  },
  {
    name: "Solo Pizzas",
    price: "$299",
    unit: "por persona",
    guests: "A partir de 30 personas",
    tag: "",
    highlight: false,
    description:
      "Un buffet de nuestras pizzas artesanales al horno de leña, con montaje y servicio incluidos. Sencillo y delicioso.",
    includes: [
      "6 especialidades de pizza artesanal",
      "Montaje y servicio",
    ],
    note: "",
  },
];

// ---- MENU PAGE ----  (catering offering, not the restaurant menu)
// TODO: confirm full list, descriptions and prices with Giovanni
export const menu = {
  intro:
    "Estas son nuestras opciones para catering de eventos. Selecciona tus 6 pizzas favoritas. Combinamos los platillos a tu gusto para crear el menú perfecto.",
  organicNote:
    "Llevamos la auténtica cocina italiana a donde estés con nuestro food truck y su horno de leña. Todo lo preparamos con ingredientes orgánicos.",
  categories: [
    {
      name: "Pizzas al horno de leña",
      // Images auto-load from /public/menu when the file exists (see naming guide).
      items: [
        {
          name: "Rústica",
          description: "Queso de cabra, manzana, jamón serrano y almendra.",
          image: "/menu/rustica.jpg",
        },
        {
          name: "Italia",
          description: "Espinaca, queso y tomate cherry.",
          image: "/menu/italia.jpg",
        },
        {
          name: "Quattro Formaggi",
          description: "Parmesano, manchego, mozzarella y roquefort.",
          image: "/menu/quattro-formaggi.jpg",
        },
        {
          name: "Capricciosa",
          description:
            "Alcachofas, jamón de pechuga de pavo ahumado, champiñones y aceitunas negras.",
          image: "/menu/capricciosa.jpg",
        },
        {
          name: "Hawaiana",
          description: "Jamón de pechuga de pavo ahumado y piña.",
          image: "/menu/hawaiana.jpg",
        },
        {
          name: "Del Capitano",
          description:
            "Espinacas, champiñones, jamón serrano, alcaparras, aceitunas negras y queso parmesano.",
          image: "/menu/del-capitano.jpg",
        },
        {
          name: "Ortolana",
          description: "Champiñones, calabacita, berenjena y espinacas.",
          image: "/menu/ortolana.jpg",
        },
        {
          name: "Della Casa",
          description:
            "Tocino, chorizo, jamón, pimiento morrón, salchicha, champiñón y salami.",
          image: "/menu/della-casa.jpg",
        },
        {
          name: "Verde",
          description: "Espinacas, requesón, mozzarella y parmesano.",
          image: "/menu/verde.jpg",
        },
        {
          name: "Pepperami",
          description: "Queso y pepperami crujiente.",
          image: "/menu/pepperami.jpg",
        },
        {
          name: "Della Nonna",
          description: "Higos, tocino y queso ahumado.",
          image: "/menu/della-nonna.jpg",
          imagePosition: "50% 72%", // pizza sits low in the photo — shift crop down
        },
      ],
    },
    {
      name: "Pastas artesanales",
      items: [
        {
          name: "Spaghetti Matricciana",
          description:
            "Pasta artesanal con salsa cremosa de tomate asado al fuego, crujiente tocino, cebollas caramelizadas y un velo de queso parmesano recién rallado.",
          image: "/menu/spaghetti-matricciana.jpg",
        },
        {
          name: "Spaghetti al Pesto",
          description:
            "Delicada mezcla de almendras, albahaca fresca, un toque de ajo, suave aceite de oliva extra virgen y queso parmesano.",
          image: "/menu/spaghetti-pesto.jpg",
        },
      ],
    },
    {
      name: "Ensaladas, complementos y bebidas",
      items: [
        {
          name: "Ensalada Della Casa",
          description:
            "Mezcla fresca de lechuga, apio, calabacita, champiñones, pimiento y zanahoria, con queso parmesano, un toque de vinagre balsámico y aceite de oliva.",
          image: "/menu/ensalada-della-casa.jpg",
        },
        {
          name: "Pan de ajo / Focaccia",
          description: "Ajo, oliva y romero.",
          image: "/menu/focaccia.jpg",
        },
        {
          name: "Limonada de frutos rojos",
          description:
            "Bebida refrescante de limonada infusionada con frutos rojos naturales.",
          image: "/menu/limonada-frutos-rojos.jpg",
        },
        {
          name: "Clericot",
          description:
            "Refrescante clericot elaborado con vino tinto afrutado y una vibrante combinación de frutas frescas de temporada.",
          image: "/menu/clericot.jpg",
        },
      ],
    },
  ],
};

// ---- LOCATIONS PAGE ----  (2 real restaurant locations)
// The "mapsQuery" is the text Google Maps searches for — full address = accurate pin.
export const locations = [
  {
    name: "Trattoria Giovanni — Centro",
    address: "Gutiérrez Zamora 103, Zona Centro, 91000 Xalapa-Enríquez, Ver.",
    mapsQuery: "Gutiérrez Zamora 103, Zona Centro, 91000 Xalapa-Enríquez, Veracruz",
  },
  {
    name: "Trattoria Giovanni — Plaza La Cima",
    address: "Av. Cordillera 27-L10, Las Trancas, 91637 Veracruz, Ver.",
    mapsQuery: "Av. Cordillera 27-L10, Las Trancas, 91637 Veracruz, Veracruz",
  },
];

// ---- TESTIMONIALS (home) ----  (real client reviews, lightly edited)
// TODO: fill in each `author` (client name) and `image` (e.g. "/testimonials/ana.jpg").
export const testimonials = [
  {
    quote:
      "Desde el principio la atención fue inmediata. El día del evento, el food truck imponente y el montaje muy organizado. La magia del horno, el olor y el sabor de las pizzas cautivaron a nuestros invitados. Sin duda los volveremos a contratar.",
    author: "Aceros Peñascal Xalapa",
    image: "/testimonials/1.jpg",
  },
  {
    quote:
      "¡Gracias por todo! Excelente la comida y la atención. Te deseo mucho éxito en este y todos tus emprendimientos.",
    author: "Estela García",
    image: "/testimonials/2.jpg",
  },
  {
    quote:
      "Increíble servicio de catering. La comida riquísima y las pizzas al horno de leña son su platillo estrella. La atención, de 10. Hizo de nuestro evento algo especial. Muy recomendado.",
    author: "Emiliano Carballo",
    image: "/testimonials/3.jpg",
  },
  {
    quote:
      "Contratarlos fue una de las mejores decisiones para nuestro evento. Comida deliciosa, presentación impecable y un servicio excelente de principio a fin. Todos nuestros invitados preguntaron quién hizo el catering. Volveríamos a contratarlos.",
    author: "Antonio Frutis",
    image: "/testimonials/4.jpg",
  },
  {
    quote:
      "Superaron por completo nuestras expectativas. Se encargaron de todo con muchísimo profesionalismo y nos olvidamos del estrés. La comida, espectacular, y nuestros invitados quedaron fascinados. Los recomiendo al 100%.",
    author: "Rafael Acosta López",
    image: "/testimonials/5.jpg",
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
      "Nuestros paquetes personalizados inician desde $349 por persona. El precio final depende del menú y el número de invitados. Revisa todos nuestros paquetes para encontrar el mejor para ti.",
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
      "Recomendamos reservar con la mayor anticipación posible para asegurar tu fecha. Para apartar tu evento se requiere un anticipo del 30% del costo total antes de la fecha. Contáctanos y con gusto revisamos disponibilidad.",
  },
];

// ---- GALLERY ----
// The gallery page now loads photos AUTOMATICALLY from the /public/gallery
// folder — just drop image files there (.jpg .png .webp .avif). No list needed.
