export const site = {
  nombre: "Susana Basáñez",
  titulo: "Psicoterapeuta | Susana Basáñez",
  descripcion:
    "Psicoterapeuta de Core Energética, Consteladora Familiar y Especialista en Eneagrama en Ciudad de México. 26+ años de experiencia acompañando procesos de transformación.",
};

export const contacto = {
  telefono: "+52 229 928 2255",
  telefonoHref: "tel:+522299282255",
  whatsapp: "https://wa.me/message/ENJWH4DKH3VVM1",
  whatsappNumero: "522299282255",
  email: "contacto@susanabasanez.com",
  direccion: "Agustín Melgar, Colonia Condesa, Ciudad de México",
};

export const social = {
  instagram: "https://www.instagram.com/susanabasanez",
  spotify: "https://open.spotify.com/show/0sf0QBl99Z3CACV7Bl0iv1",
  podcastInstagram: "https://www.instagram.com/dequesetrataesto",
};

export function whatsappCurso(nombreCurso: string) {
  const texto = encodeURIComponent(`Hola, quiero inscribirme a ${nombreCurso}`);
  return `https://wa.me/${contacto.whatsappNumero}?text=${texto}`;
}

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi/" },
  { label: "Terapia", href: "/terapia/" },
  { label: "Cursos", href: "/cursos/" },
  { label: "Empresas", href: "/empresas/" },
  { label: "Podcast", href: "/podcast/" },
  { label: "Contacto", href: "/contacto/" },
];
