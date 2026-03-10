export interface Trabajo {
  id: number;
  nomen: string;
  imago: string | string[];
  quote: string;
  descriptione: string;
  año: number;
  categoria: ('ilustracion' | 'editorial' | 'dibujos' | 'todo')[];
}

export const trabajos: Trabajo[] = [
  {
    id: 0,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Autorretrato como una ovejita",
    imago: "autorOveja.jpg",
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "El objetivo de esta ilustración era representarme como cualquier tipo de animal. Elegí una oveja porque son conocidas por ser observadoras y… ¡son tan esponjosas! ¿A quién no le encantaría?"
  },

  {
    id: 1,
    año: 2020,
    categoria: ['ilustracion', 'todo'],
    nomen: "Una persona constante",
    imago: "constante.jpg",
    quote: "ILUSTRACIÓN ACRÍLICA",
    descriptione: "Ejercicio de clase en el que interpretamos la dieta anónima de un compañer@. En mi caso, la definí como “constante”, ya que se toma su café con leche de avellanas cada mañana."
  },
  
  { 
    id: 2,
    año: 2020,
    categoria: ['ilustracion', 'todo'],
    nomen: "Nara y Sara",
    imago: "narSar.jpg",
    quote: "GOUACHE CON LÁPICES DE COLORES",
    descriptione: "Díptico sobre dos abuelas separadas por la Guerra de Corea: Nara, en el Norte, vive con miedo; Sara, en el Sur, con libertad. Décadas después, se reencuentran."
  },
  
  
  {
    id: 3,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Mi lugar de trabajo ideal",
    imago: "lugarIdeal.jpg",
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Se nota que me encanta la madera? Quiero que todo, incluyendo el suelo, sea de madera. Y un puf es imprescindible. Y un montón de cosas más que adoro."
  },
  
  {
    id: 4, 
    año: 2025,
    categoria: ['ilustracion', 'todo'],
    nomen: "El jardín secreto",
    imago: ['eJSport.jpg', 'unaPag.jpg', 'doblePag.jpg', 'guarda!1.jpg', 'guarda!2.jpg' ],
    quote: "ILUSTRACIÓN NARRATIVA",
    descriptione: "Serie de ilustraciones para el libro El Jardín Secreto. Mi objetivo fue retratar el ambiente mágico y misterioso que envuelve la historia."
  },
  
  {
    id: 5,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Feliz año nuevo chino",
    imago: "tarjFelic.jpg",
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Tarjeta de felicitación para el Año del Tigre (2022), usando una paleta de color limitada."
  },
  
  { 
    id: 6,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Fanny Fun Time",
    imago: "funTime.jpg",
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Postal de Fanny Fun Time, un parque de atracciones con forma de reloj, donde la montaña rusa bordea la estructura y las manecillas son la atracción principal."
  },
  {
    id: 7,
    año: 2025,
    categoria: ['ilustracion', 'todo'],
    nomen: "36 Days of Type",
    imago: "letrritas.jpg",
    quote: "ILUSTRACIONES A GOUACHE",
    descriptione: "Mi versión de 36 Days of Type, con el concepto vintage. Mis referencias fueron los papeles pintados florales y William Morris."
  },
  {
  id: 8,
    año: 2025,
    categoria: ['editorial', 'todo'],
    nomen: "Valencia, capital mundial de innovación tecnológica",
    imago: ['edit2-1.jpg', 'edit2-2.jpg' ],
    quote: "DISEÑO EDITORIAL",
    descriptione: "Maquetación para un artículo que trata sobre VDS, uno de los eventos tecnológicos internacionales más destacados de Europa y una plataforma que está transformando Valencia en un centro tecnológico global."
  },
  {
  id: 9,
    año: 2026,
    categoria: ['editorial', 'todo'],
    nomen: "Salud mental en diseñadores: retos y estrategias para el bienestar",
    imago: ['edit3-1.jpg', 'edit3-2.jpg' ],
    quote: "DISEÑO EDITORIAL",
    descriptione: "Maquetación para un artículo académico sobre los retos que tenemos los diseñadores y las estrategias para promover nuestro bienestar."
  },
  {
  id: 10,
    año: 2020,
    categoria: ['dibujos', 'todo'],
    nomen: "Retrato",
    imago: 'retrato1.jpg',
    quote: "DIBUJO",
    descriptione: "Realizado sobre papel Canson mi-teintes."
  },
  {
  id: 11,
    año: 2026,
    categoria: ['dibujos', 'todo'],
    nomen: "Retrato",
    imago: 'retrato2.jpg',
    quote: "DIBUJO",
    descriptione: "Realizado sobre papel Canson mi-teintes."
  },
  {
  id: 12,
    año: 2025,
    categoria: ['ilustracion', 'todo'],
    nomen: "Miloa",
    imago: 'miloa2.jpg',
    quote: "ILUSTRACIÓN EN PACKAGING",
    descriptione: "Diseño de packaging para una marca de chocolate imaginativa que enfatiza la producción artesanal. Las manos exageradas de los personajes simbolizan la artesanía y evocan la calidez de una pequeña empresa familiar."
  },
  {
  id: 13,
    año: 2020,
    categoria: ['ilustracion', 'todo'],
    nomen: "Cuatro estaciones",
    imago: '4estaciones.jpg',
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Patrón repetitivo de las cuatro estaciones."
  },
  {
  id: 14,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Ramram",
    imago: 'ramram.jpg',
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Infografía sobre una planta imaginativa que contiene ramen, alga, puerro y semillas."
  },
  {
  id: 15,
    año: 2020,
    categoria: ['ilustracion', 'todo'],
    nomen: "Roba la gallina",
    imago: 'carnaval.jpg',
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Ilustración con paleta limitada sobre Roba la Gallina, un personaje principal del carnaval dominicano."
  },
  {
  id: 16,
    año: 2020,
    categoria: ['dibujos', 'todo'],
    nomen: "Retrato de un señor",
    imago: 'retratoSenor.jpg',
    quote: "DIBUJO",
    descriptione: "Realizado con carboncillo y lápiz."
  },
  {
  id: 17,
    año: 2020,
    categoria: ['dibujos', 'todo'],
    nomen: "Vestido elegante",
    imago: 'vestido.jpg',
    quote: "DIBUJOS",
    descriptione: "Práctica de ilustración de moda."
  },
  {
  id: 18,
    año: 2021,
    categoria: ['ilustracion', 'todo'],
    nomen: "Rediseño de un dibujo de la infancia",
    imago: 'redibujo.jpg',
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Me gustaba Carly Jae Repsen, Bruno Mars y Barbie. Los redibujé con el edificio alto que estaba en mi dibujo anterior."
  },
  {
  id: 19,
    año: 2026,
    categoria: ['ilustracion', 'todo'],
    nomen: "Patrón para una alfombra de bolera",
    imago: 'patron.jpg',
    quote: "ILUSTRACIÓN DIGITAL",
    descriptione: "Patrón de diferentes elementos de Ralph el demoledor.",
  },
  {
    id: 20,
    año: 2025,
    categoria: ['ilustracion', 'todo'],
    nomen: "Mi primer choque lingüístico",
    imago: 'comicZiper.jpg',
    quote: "ILUSTRACIÓN SECUENCIAL",
    descriptione: "Cómic de 2 páginas que trata sobre mi primera palabra desconocida en castellano.",
  },
];