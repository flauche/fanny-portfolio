export interface Educacion {
  año: number;
  titulo: string;
  institucion: string;
}

export const educaciones: Educacion[] = [
  {
    año: 2021,
    titulo: 'Título técnico en Ilustración',
    institucion: 'Chavón La Escuela de Diseño',
  },
  {
    año: 2028,
    titulo: 'Grado en Diseño y Tecnologías Creativas',
    institucion: 'Universitat Politécnica de València',
  },
];

export interface Experiencia {
  año: number;
  puesto: string;
  empresa: string;
}

export const experiencias: Experiencia[] = [
  {
    año: 2019,
    puesto: 'Profesora de inglés',
    empresa: 'Un Paraíso Montessori',
  },
  {
    año: 2019,
    puesto: 'Profesora de inglés',
    empresa: 'Instituto Cultural Domínico Americano',
  },
  {
    año: 2022,
    puesto: 'Community Manager',
    empresa: 'Importadora Ferretería Tu Casa',
  },
  {
    año: 2029,
    puesto: 'Guionista gráfica',
    empresa: 'Por determinar',
  },
  {
    año: 2030,
    puesto: 'Gestora creativa',
    empresa: 'Por determinar',
  }
];

export const habilidades = [
  'MS Office',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe InDesign',
  'Figma',
  'Blender',
  'Planificación de lecciones',
  'HTML/CSS',
  'Vue.js'
];
