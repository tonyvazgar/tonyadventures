// ✏️ AQUÍ EDITAS TODOS LOS DATOS Y TEXTOS DE LA PÁGINA

export const WHATSAPP = '52XXXXXXXXXX'; // código de país + número, sin + ni espacios
export const INSTAGRAM = 'TUUSUARIO';   // sin @

export const wa = (msg: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

// Fotos: ponlas en /public/fotos y agrégalas así: 'fotos/rodada1.jpg'
export const PHOTOS: string[] = [];

export const SERVICES = [
  { icon: '🚙', title: 'Transporte de bicis', text: 'Llevamos tu bici y a ti a la carrera o ruta. Cupo de 4 bicis.' },
  { icon: '🚴', title: 'Rodadas', text: 'Salidas en grupo, ritmo tranquilo, sábado o domingo.' },
  { icon: '🐶', title: 'Paseos con perrhijos', text: 'Caminata de 4–5 km con tu perrito y comida al cierre.' },
];

export const PRICES = [
  { title: 'Transporte de bici', price: '$350', text: 'Por persona. Incluye una bebida fría. Te recogemos y regresamos en casa, o nos vemos en un punto acordado.' },
  { title: 'Paseo con perrhijos', price: '$500', text: 'Por persona. Snack, agua para ti y tu perrito, botiquín y comida (1 platillo + bebida).' },
];

export const STEPS = [
  { title: 'Escríbeme', text: 'Por WhatsApp o DM de Instagram. Cupo limitado.' },
  { title: 'Confirmamos fecha y punto', text: 'Pagas por transferencia o efectivo.' },
  { title: 'Nos vemos y rodamos', text: 'Tú disfrutas, yo llevo lo demás.' },
];

export const DATES = [
  { title: 'Transporte a Popobike', when: 'Domingo 25 de octubre · 4 lugares', msg: 'Quiero lugar para Popobike' },
];
