// Primero, importa los iconos que usarás de `react-icons`
import {
  FaReact, FaBootstrap, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaRobot, FaDatabase, 
  FaServer, FaWhatsapp, FaGlobeAmericas, FaCertificate } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiPostgresql, SiExpress, SiTypescript,
  SiN8N, SiOpenai, SiSupabase, SiJavascript, SiPwa, SiTelegram} from "react-icons/si";
import { SiShopify } from 'react-icons/si'

  export const projectsData = [


{
    id: 1,
    title: "💎 Magnolia Joyas - E-commerce",
    description:
      "E-commerce completo full-stack para joyería especializada en plata 925, oro 18k y productos personalizados. Incluye catálogo con sistema de categorización jerárquica, carrito de compras, lista de deseos, API RESTful con NestJS y base de datos PostgreSQL con TypeORM.",
    technologies: [
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "React 19", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "NestJS", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "TypeORM" },
      { name: "Swagger" },
      { name: "Docker" },
      { name: "Context API" },
    ],
    features: [
      { icon: "🏠", text: "Página inicio con productos destacados" },
      { icon: "🔍", text: "Sistema categorías jerárquico" },
      { icon: "🛒", text: "Carrito con persistencia LocalStorage" },
      { icon: "❤️", text: "Lista de favoritos/wishlist" },
      { icon: "👤", text: "Login y registro validados" },
      { icon: "📱", text: "Diseño responsive premium" },
      { icon: "🎨", text: "Paleta colores personalizada" },
      { icon: "⚡", text: "Animaciones fluidas y 3D" },
      { icon: "🔌", text: "API RESTful con NestJS" },
      { icon: "📚", text: "Documentación Swagger" },
      { icon: "🌱", text: "Sistema seeds datos iniciales" },
      { icon: "🐳", text: "Dockerizado para deploy" },
    ],
    myContribution: [
      {
        title: "🎨 Diseño y Arquitectura Frontend",
        description: "Desarrollé el frontend completo con Next.js App Router, implementando diseño elegante con paleta de colores custom (magnolia-dark, magnolia-lilac), tipografías premium (Playfair Display + Lato) y animaciones 3D en tarjetas de productos con efectos hover fluidos."
      },
      {
        title: "🛒 Sistema de Carrito y Favoritos",
        description: "Implementé carrito de compras completo con Context API y persistencia en LocalStorage, sistema de wishlist/favoritos, y panel lateral deslizable con resumen de compra. Incluye gestión de cantidades, eliminación de items y cálculo de totales en tiempo real."
      },
      {
        title: "🔧 Backend y Base de Datos",
        description: "Desarrollé API RESTful completa con NestJS, implementando CRUD de productos, sistema de categorización jerárquica (Categorías → Tipos → Subtipos) con TypeORM, validación de datos con class-validator, y documentación automática con Swagger."
      },
      {
        title: "🚀 Integración Full-Stack",
        description: "Establecí la integración completa frontend-backend, configuré PostgreSQL con Docker, creé sistema de seeds para datos iniciales (5 categorías + 10 productos), y configuré filtrado avanzado por categoría, tipo y subtipo con endpoints optimizados."
      }
    ],
    cardImages: [
      "/images/ecommers.jpeg",
      "/images/ecommers2.jpeg",
      "/images/ecommers4.jpeg",
    ],
    githubUrl: "https://github.com/VMGaray/magnolia_joyas.git",
    deployUrl: "https://www.magnoliajoyas.com.ar",
    images: [
      "/images/ecommers.jpeg",
      "/images/ecommers1.jpeg",
      "/images/ecommers2.jpeg",
      "/images/ecommers3.jpeg",
      "/images/ecommers4.jpeg",
      "/images/ecommers5.jpeg",
    ],
  },
{
  id: 2,
  title: "👜 Fernanda Saladino — E-commerce de Cuero",
  description:
    "Tienda online freelance para artesana argentina especializada en carteras, bolsos y accesorios de cuero hechos a mano. Desarrollado de punta a punta: diseño, frontend, backend y deploy. Incluye panel de administración completo, gestión de pedidos, estadísticas y PWA instalable.",
  technologies: [
    { name: "Next.js 15", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "PWA", icon: SiPwa },
    { name: "Vercel" },
    { name: "RLS" },
  ],
  features: [
    { icon: "🛍️", text: "Catálogo con filtro por categoría" },
    { icon: "🔍", text: "Búsqueda en tiempo real con debounce" },
    { icon: "🛒", text: "Carrito persistente en localStorage" },
    { icon: "💬", text: "Checkout vía WhatsApp" },
    { icon: "❤️", text: "Favoritos con persistencia" },
    { icon: "🔐", text: "Auth completa (registro, login, logout)" },
    { icon: "📦", text: "Historial de pedidos por usuario" },
    { icon: "🎁", text: "Gift Card con animación flip" },
    { icon: "📱", text: "PWA instalable en Android e iOS" },
    { icon: "⚙️", text: "Panel admin con CRUD y estadísticas" },
    { icon: "📊", text: "Gestión de estados de pedidos" },
    { icon: "🛡️", text: "Row Level Security en Supabase" },
  ],
  myContribution: [
    {
      title: "🏗️ Proyecto Freelance Full-Stack",
      description: "Desarrollé el proyecto completo de punta a punta: diseño de UI, frontend con Next.js 15 App Router, backend con Supabase (PostgreSQL + Auth + Storage + RLS) y deploy en Vercel."
    },
    {
      title: "⚙️ Panel de Administración",
      description: "Implementé panel admin protegido por rol con CRUD completo de productos, subida de imágenes múltiples a Supabase Storage, gestión de pedidos con cambio de estados y estadísticas de ventas."
    },
    {
      title: "🛒 Flujo de Compra y Auth",
      description: "Desarrollé carrito persistente, sistema de favoritos, historial de pedidos por usuario, flujo de checkout vía WhatsApp y autenticación completa con redirect automático según rol."
    },
  ],
  githubUrl: "https://github.com/VMGaray/fernanda-saladino.git",
  deployUrl: "https://fernanda-saladino.vercel.app",
  images: [],
},
    {
    id: 3,
    title: "🧑‍🚒 Héroes Cercanos",
    description:
      "Plataforma solidaria que conecta a la comunidad con los bomberos voluntarios. Sistema completo con roles diferenciados (admin/usuario), gestión de campañas, donaciones, capacitaciones, geolocalización y reportes de incidentes.",
    // Aquí cambiamos el array de strings a un array de objetos con nombre e icono
    technologies: [
      { name: "Next.js 14", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "OAuth 2.0" },
      { name: "Context API" },
      { name: "JWT" },
      { name: "Mercado Pago" },
      { name: "Cloudinary" },
      { name: "Leaflet" },
      { name: "Render" },
    ],
    features: [
      { icon: "🔐", text: "Autenticación con email y Google" },
      { icon: "🧑‍💼", text: "Roles: admin / usuario" },
      { icon: "🧾", text: "Campañas públicas compartibles" },
      { icon: "📦", text: "Gestión de donaciones" },
      { icon: "🎓", text: "Capacitaciones y contenido" },
      { icon: "🧭", text: "Geolocalización con mapa" },
      { icon: "📱", text: "Diseño responsive" },
      { icon: "💲", text: "Pasarela Mercado Pago" },
      { icon: "📧", text: "Notificaciones email" },
      { icon: "👥", text: "Gestor de usuarios" },
      { icon: "🔥", text: "Reportar incidentes" },
      { icon: "📈", text: "Métricas de admin" },
    ],
    myContribution: [
      {
        title: "🤖 Chatbot Inteligente",
        description: "Implementé un chatbot integrado con Voiceflow, personalizando su carga, estilo y comportamiento para asegurar coherencia visual con la plataforma. Optimicé su rendimiento con carga única y sistema de apertura/cierre desde un botón flotante propio."
      },
      {
        title: "🗺️ Sistema de Geolocalización",
        description: "Desarrollé el módulo de geolocalización con Leaflet.js, permitiendo a los usuarios reportar incidentes seleccionando tipo y ubicación directamente en un mapa interactivo, con formularios accesibles y validados."
      },
      {
        title: "📊 Panel de Métricas",
        description: "Implementé el sistema completo de métricas para el panel de administración, consumiendo endpoints seguros del backend y visualizando datos mediante gráficos dinámicos. Incluye estadísticas de usuarios, donaciones e incidentes (semanal, mensual y total)."
      }
    ],
    cardImages: [
      "/images/heroes chatBot.jpg",
      "/images/heroes metrivas.jpg",
    ],
    githubUrl: "https://github.com/heroes-cercanos.git",
    deployUrl: "https://heroes-cercanos-front.onrender.com/",
    images: [
      "/images/heroes landing.jpg",
      "/images/heroes login.jpg",
      "/images/heroes chatBot.jpg",
      "/images/heroes cuartel.jpg",
      "/images/heroes metrivas.jpg",
      "/images/heroes reportes.jpg",
    ],
  },
  {
  id: 4,
  title: "🌿 La Chamana — Shopify Theme",
  description:
    "Tema personalizado de Shopify para una villa de lujo en Tulum, México. Desarrollado de punta a punta: diseño, Liquid templating, integraciones con Cloudbeds para reservas directas y Klaviyo para email marketing. Incluye galería infinita, carrusel de espacios, widget de booking personalizado y diseño editorial de alta gama.",
  technologies: [
    { name: "Shopify Liquid" },
    { name: "JavaScript" },
    { name: "CSS" },
    { name: "Cloudbeds" },
    { name: "Klaviyo" },
    { name: "PWA" },
    { name: "Shopify CLI" },
  ],
  features: [
    { icon: "🏨", text: "Hero con widget de booking Cloudbeds" },
    { icon: "🛏️", text: "Sección de suites con imagen/video" },
    { icon: "🎠", text: "Carrusel de 9 espacios con autoplay" },
    { icon: "🪗", text: "Acordeones de experiencias con precios" },
    { icon: "🖼️", text: "Galería infinita con soporte táctil" },
    { icon: "🗺️", text: "Google Maps embed (Tulum)" },
    { icon: "📧", text: "Newsletter con integración Klaviyo" },
    { icon: "📱", text: "Responsive + diseño editorial de lujo" },
  ],
  myContribution: [
    {
      title: "🎨 Tema Shopify desde Cero",
      description: "Desarrollé el tema completo en Liquid con arquitectura de secciones, bloques y snippets reutilizables. Implementé sistema de design tokens con variables CSS generadas desde el theme editor de Shopify."
    },
    {
      title: "📅 Integración Cloudbeds",
      description: "Integré el widget de reservas de Cloudbeds manipulando el DOM para mover el date picker nativo al contenedor del tema, logrando coherencia visual total con el diseño de La Chamana."
    },
    {
      title: "✉️ Email Marketing con Klaviyo",
      description: "Implementé formulario de suscripción con fetch directo a la API de Klaviyo, mensajes de éxito/error personalizados y list ID configurable desde el theme editor."
    },
  ],
  githubUrl: "https://github.com/VMGaray/lachamana",
  deployUrl: "",
  images: [],
},
  {
    id: 5,
    title: "VGB-STORE -- Ecommerce",
    description:
      "Una tienda online desarrollada como proyecto final del curso de desarrollo frontend. Utiliza tecnologías modernas como Next.js (App Router), TypeScript y Tailwind CSS.",
    // Aquí también cambiamos el formato
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Context API" },
      { name: "localStorage" },
    ],
    githubUrl: "https://github.com/VMGaray/VGB-STORE--Ecommerce.git",
    deployUrl: "https://vgb-store.vercel.app/",
    images: [
      "/images/vgb-store-1.jpg",
      "/images/vgb-store-2.jpg",
      "/images/vgb-store-3.jpg",
      "/images/vgb-store-5.jpg",
      "/images/vgb-store-6.jpg",
    ],
  },
  {
    id: 6,
    title: "📰 Impacto Notas de Prensa - ICC Group",
    description:
      "Sistema automatizado para evaluar el impacto real de notas de prensa en radio y televisión. Implementado en n8n con integración de IA para análisis emocional, métricas objetivas y generación de resúmenes ejecutivos basados en datos reales.",
    technologies: [
      { name: "n8n", icon: SiN8N },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaJs },
      { name: "OpenAI API" },
      { name: "REST APIs" },
      { name: "JSON" },
    ],
    myContribution: [
      {
        title: "🔄 Flujo Backend Automatizado",
        description: "Diseñé e implementé el flujo backend completo que consulta APIs de medios, filtra contenido relevante y calcula métricas objetivas como cobertura, duración, alcance y engagement en tiempo real."
      },
      {
        title: "🤖 Integración de IA",
        description: "Integré modelos de lenguaje (LLM) para realizar análisis emocional automatizado del contenido y generar resúmenes ejecutivos basados en datos reales, mejorando la toma de decisiones."
      },
      {
        title: "⚙️ Optimización y Validación",
        description: "Refactoricé nodos n8n y validé estructuras JSON para asegurar respuestas completas y confiables. Ejecuté pruebas E2E con contenido real para validar comportamiento ante distintos escenarios."
      },
      {
        title: "🎨 Frontend Funcional",
        description: "Desarrollé el frontend que muestra resultados en tiempo real con visualización clara de métricas, sentimiento global y clasificación emocional, incluyendo diseño de fallback para casos edge."
      }
    ],
    cardImages: [
      "/images/n8n.jpeg",
    ],
    githubUrl: "#",
    deployUrl: "",
    images: [
      "/images/nota-prensa.jpeg",
      "/images/nota-prensa1.jpeg",
      "/images/nota-prensa2.jpeg",
      "/images/nota-prensa3.jpeg",
      "/images/n8n.jpeg",
    ],
  },
  
  {
    id: 7,
    title: "Lumière Beauty - Sistema de Turnos",
    description:
      "Aplicación web moderna y elegante para la gestión de turnos de un salón de belleza. Ofrece autenticación de usuarios, gestión completa de citas, diseño responsive y validación en tiempo real.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "Vite" },
      { name: "React Router" },
      { name: "Axios" },
      { name: "CSS Modules" },
    ],
    githubUrl: "https://github.com/VMGaray/sistema-de-turnos.git",
    deployUrl: "",
    images: [
      "/images/sistema de turnos.jpg",
      "/images/sistema de turnos1.jpg",
      "/images/sistema de turnos2.jpg",
      "/images/sistema de turnos3.jpg",
      "/images/sistema de turnos4.jpg",
    ],
  },
  {
    id: 8,
    title: "🤖 Alerta Menciones - IA Lead Gen",
    description:
      "Sistema de inteligencia de mercado que automatiza la ingesta, filtrado y calificación de leads desde TripAdvisor. Procesa miles de noticias mediante agentes de IA para identificar oportunidades de negocio reales, eliminando el ruido informativo y centralizando la gestión en una base de datos vectorial.",
    technologies: [
      { name: "n8n", icon: SiN8N },
      { name: "OpenAI GPT-4", icon: SiOpenai },
      { name: "Supabase (Vectors)", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "JavaScript", icon: SiJavascript },
      { name: "REST APIs" },
    ],
    features: [
      { icon: "📡", text: "Extracción masiva de TripAdvisor" },
      { icon: "🧠", text: "Calificación lógica con Agentes IA" },
      { icon: "🔢", text: "Búsqueda semántica (Vector Embeddings)" },
      { icon: "⚙️", text: "Procesamiento por lotes (Batch processing)" },
      { icon: "🔗", text: "Arquitectura modular de micro-flujos" },
      { icon: "🛡️", text: "Sistema de limpieza de duplicados" },
    ],
    myContribution: [
      {
        title: "⚙️ Arquitectura de Flujos Batch",
        description: "Diseñé e implementé la lógica de procesamiento por lotes para gestionar más de 9,000 registros diarios, optimizando el uso de memoria en n8n y evitando bloqueos del servidor."
      },
      {
        title: "🤖 Ingeniería de Prompts y Agentes",
        description: "Configuré y calibré el Agente de IA (GPT-4) para analizar noticias complejas y extraer leads calificados, logrando una reducción del 60% en el tiempo de revisión manual del equipo comercial."
      },
      {
        title: "🛰️ Integración Vectorial",
        description: "Desarrollé la integración con Supabase y pgvector para el almacenamiento de embeddings, permitiendo que el sistema realice un 'matching' inteligente entre noticias y perfiles de clientes."
      }
    ],
    cardImages: [
      "/images/alerta menciones flujo.jpeg", // Recordá subir estas imágenes a tu carpeta public/images
    ],
    githubUrl: "#", // Al ser un proyecto privado/empresa, podés dejarlo así o linkear a un repo de demo
    deployUrl: "", 
    images: [
      "/images/alerta menciones flujo.jpeg",
      "/images/matching flujo.jpeg",
      "/images/recolector flujo.jpeg",
    ],
  },
  {
    id: 9,
    title: "🌊 Martins Perforaciones - Web & PWA",
    description:
      "Landing Page y Progressive Web App (PWA) de alta performance desarrollada para una empresa líder en perforaciones de agua en el Valle de Calamuchita, Córdoba. El proyecto se centra en transmitir solidez técnica y cumplimiento normativo (Habilitación DIPAS), optimizando la captación de clientes locales.",
    technologies: [
      { name: "Next.js (App Router)", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PWA", icon: SiPwa },
      { name: "React", icon: FaReact },
    ],
    features: [
      { icon: "📱", text: "Instalable como App (PWA)" },
      { icon: "💬", text: "Sistema de ruteo inteligente a WhatsApp" },
      { icon: "📜", text: "Sección técnica de Habilitación DIPAS n°94" },
      { icon: "🛠️", text: "Explicación visual del proceso de perforación" },
      { icon: "📍", text: "Enfoque en SEO Local (Valle de Calamuchita)" },
      { icon: "🔒", text: "Lógica de interfaz condicional para Admins" },
    ],
    myContribution: [
      {
        title: "🏗️ Desarrollo Full-Stack & PWA",
        description: "Implementé la arquitectura completa bajo Next.js 14 y configuré las capacidades de Progressive Web App para asegurar acceso offline y una experiencia fluida desde dispositivos móviles en zonas rurales."
      },
      {
        title: "📲 Lógica de Contacto Dinámica",
        description: "Desarrollé un sistema de contacto que permite al usuario o administrador seleccionar dinámicamente el canal de comunicación, integrando APIs de mensajería directa."
      },
      {
        title: "🎨 UI/UX con Enfoque de Marca",
        description: "Diseñé una interfaz que balancea la robustez industrial con la confianza, utilizando una paleta de colores profesional y tipografías modernas para destacar la seriedad de la empresa frente a la competencia."
      }
    ],
    cardImages: [
      "/images/app martins.jpeg",
    ],
    githubUrl: "#", 
    deployUrl: "https://martins-perforaciones-app.vercel.app/", // Reemplazar si tenés el dominio real
    images: [
      "/images/app martins.jpeg",
      "/images/app martins login.jpeg",
      "/images/app martins admin.jpeg",

    ],
  },
  {
    id: 10,
    title: "🔔 Timbre Inteligente QR — IoT & Telegram Bot",
    description:
      "Timbre inteligente para el hogar: un código QR en la puerta abre una web mobile-first donde el visitante toca el timbre, con nombre y motivo opcionales. El aviso llega en simultáneo al Telegram de toda la familia a través de un bot propio, con botones de respuesta rápida o texto libre. La respuesta aparece en tiempo real en el celular del visitante sin revelar quién respondió, y el resto de la familia recibe un aviso de quién contestó. Incluye webhook verificado por secret, anti-spam, honeypot, base de datos aislada en un schema propio con RLS y acceso solo desde el servidor, e interfaz animada con íconos 3D.",
    technologies: [
      { name: "Next.js 16", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Supabase", icon: SiSupabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Telegram Bot API", icon: SiTelegram },
      { name: "Webhooks" },
      { name: "Motion" },
      { name: "Vercel" },
    ],
    cardImages: [
      "/images/timbre-1.png",
    ],
    githubUrl: "#", // Repo privado: es el timbre real de mi casa
    deployUrl: "",
    badge: "Proyecto personal · Demo a pedido",
    images: [
      "/images/timbre-1.png",
      "/images/timbre-2.png",
      "/images/timbre-3.png",
    ],
  },
];