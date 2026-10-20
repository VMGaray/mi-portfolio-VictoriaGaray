import type { StaticImageData } from 'next/image';

import heroesLanding from '../../public/images/heroes landing.jpg';
import heroesLogin from '../../public/images/heroes login.jpg';
import heroesChatBot from '../../public/images/heroes chatBot.jpg';
import heroesCuartel from '../../public/images/heroes cuartel.jpg';
import heroesMetricas from '../../public/images/heroes metrivas.jpg';
import heroesReportes from '../../public/images/heroes reportes.jpg';
import vgbStore1 from '../../public/images/vgb-store-1.jpg';
import vgbStore2 from '../../public/images/vgb-store-2.jpg';
import vgbStore3 from '../../public/images/vgb-store-3.jpg';
import vgbStore4 from '../../public/images/vgb-store-4.jpg';
import notaPrensa from '../../public/images/nota-prensa.jpeg';
import notaPrensa1 from '../../public/images/nota-prensa1.jpeg';
import notaPrensa2 from '../../public/images/nota-prensa2.jpeg';
import n8n from '../../public/images/n8n.jpeg';
import ecommers from '../../public/images/ecommers.jpeg';
import ecommers1 from '../../public/images/ecommers1.jpeg';
import ecommers2 from '../../public/images/ecommers2.jpeg';
import sistemaTurnos from '../../public/images/sistema de turnos.jpg';
import appMartins from '../../public/images/app martins.jpeg';
import appMartinsLogin from '../../public/images/app martins login.jpeg';
import timbre1 from '../../public/images/timbre-1.png';
import timbre2 from '../../public/images/timbre-2.png';
import timbre3 from '../../public/images/timbre-3.png';

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  project: string;
  detail: string;
  orientation: 'portrait' | 'landscape';
};

// La orientación se calcula con las dimensiones reales de la imagen importada
const img = (src: StaticImageData, project: string, detail: string): GalleryImage => ({
  src,
  project,
  detail,
  alt: `${project}: ${detail}`,
  orientation: src.height > src.width ? 'portrait' : 'landscape',
});

export const galleryImages: GalleryImage[] = [
  img(heroesLanding, 'Héroes Cercanos', 'landing'),
  img(heroesLogin, 'Héroes Cercanos', 'login'),
  img(heroesChatBot, 'Héroes Cercanos', 'chatbot de asistencia'),
  img(heroesCuartel, 'Héroes Cercanos', 'información del cuartel'),
  img(heroesMetricas, 'Héroes Cercanos', 'panel de métricas'),
  img(heroesReportes, 'Héroes Cercanos', 'reporte de incidentes'),
  img(vgbStore1, 'VGB Store', 'productos destacados'),
  img(vgbStore2, 'VGB Store', 'carrito de compras'),
  img(vgbStore3, 'VGB Store', 'registro de usuario'),
  img(vgbStore4, 'VGB Store', 'perfil del usuario'),
  img(notaPrensa, 'Impacto Notas de Prensa', 'formulario de análisis'),
  img(notaPrensa1, 'Impacto Notas de Prensa', 'invitación a crear cuenta'),
  img(notaPrensa2, 'Impacto Notas de Prensa', 'resultados del análisis'),
  img(n8n, 'Impacto Notas de Prensa', 'flujo de automatización en n8n'),
  img(ecommers, 'Magnolia Joyas', 'home del e-commerce'),
  img(ecommers1, 'Magnolia Joyas', 'compra por categoría'),
  img(ecommers2, 'Magnolia Joyas', 'piezas destacadas'),
  img(sistemaTurnos, 'Lumière Beauty', 'inicio de sesión'),
  img(appMartins, 'Martins Perforaciones', 'landing de la app'),
  img(appMartinsLogin, 'Martins Perforaciones', 'login de la app'),
  img(timbre1, 'Timbre QR', 'formulario del visitante'),
  img(timbre2, 'Timbre QR', 'esperando respuesta'),
  img(timbre3, 'Timbre QR', 'respuesta recibida'),
];
