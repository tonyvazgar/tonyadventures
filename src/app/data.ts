// ✏️ AQUÍ EDITAS TODOS LOS DATOS Y TEXTOS DE LA PÁGINA

export const WHATSAPP = '522226772173'; // código de país + número, sin + ni espacios
export const INSTAGRAM = 'jimny_con_tony';   // sin @

export const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Fotos: ponlas en /public/fotos y agrégalas así: 'fotos/rodada1.jpg'
export const PHOTOS: string[] = [];

export const SERVICES = [
  { icon: '🚙', title: 'Transporte de bicis', text: 'Llevamos tu bici y a ti a la carrera o ruta. Cupo de 4 bicis (si soy guia 3 bicis).' },
  { icon: '🚴', title: 'Rodadas', text: 'Salidas en grupo, ritmo tranquilo a elegir, sábado o domingo.' },
  { icon: '🚌', title: 'Barredora', text: 'Servicio de barredora para ti y tus amigos, yo te cuido a ti y a tu bici.' },
];

export const PRICES = [
  { title: 'Transporte de bici (Popobike)', price: '$350', text: 'Por persona. Incluye una bebida fría. Te recogemos y regresamos en casa, o nos vemos en un punto acordado (depende de los integrantes del grupo).' },
  { title: 'Barredora', price: '$500', text: 'Por persona. Yo voy manejando para cuidarte a ti y tus amigos, regresamos a casa seguros. El costo depende del tiempo, gasolina se cobra por aparte.' },
];

export const STEPS = [
  { title: 'Escríbeme', text: 'Por WhatsApp o DM de Instagram. Cupo limitado.' },
  { title: 'Confirmamos fecha y punto', text: 'Pagas por transferencia o efectivo.' },
  { title: 'Nos vemos y rodamos o te llevo a tu carrera', text: 'Tú disfrutas, yo llevo lo demás.' },
  { title: 'Regreso a casa o punto de reunion', text: 'No debes de preocuparte, te dejo en donde te recogi o donde me digas.' },
];

export const DATES = [
  { title: 'Transporte a Popobike', when: 'Domingo 25 de octubre · 4 lugares', msg: 'Quiero lugar para Popobike' },
];
