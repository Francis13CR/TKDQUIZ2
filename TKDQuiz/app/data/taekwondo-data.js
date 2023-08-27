// taekwondoData.js


//Introducción al Taekwondo:

// Qué es el Taekwondo
// Origen y historia
// Principales características y enfoques

// Filosofía y Valores del Taekwondo:
// Filosofía subyacente
// Valores y código de honor
// Significado de los elementos simbólicos (uniforme, cinturón, etc.)

// Taekwondo en la Actualidad:
// Organizaciones mundiales y nacionales
// Historia del Taekwondo en una región específica (por ejemplo, Costa Rica)
// Desarrollo y relevancia moderna

// Taekwondo Fénix:
// Origen y fundador
// Significado del nombre
// Enfoque y objetivos

// Misión y Visión:
// Misión de Taekwondo Fénix
// Visión a futuro
// Objetivos y metas

// Significado del Taekwondo y sus Componentes:
// Desglose del nombre Taekwondo (TAE, KWON, DO)
// Espíritus del Taekwondo
// Significado y orden de los cinturones

// Taeguk y Formas:
// Explicación de Taeguk
// Descripción de algunas formas (Taeguk il Chang, Taeguk i Chang)
// Aspectos para mejorar las formas

// Vocabulario y Conceptos Clave:
// Vocabulario técnico y términos importantes
// Números en coreano
// Acciones y penalizaciones en combate

// Fundamentos y Técnicas del Taekwondo:
// Descripción de conceptos básicos (Maki, Chirigui, Sogui, Chagui)
// Ejemplos prácticos de posiciones y movimientos

// Acciones Prohibidas en Combate:
// Lista de acciones penalizadas
// Comportamientos no permitidos durante el combate

export const categories = [
  { name: 'Introducción al Taekwondo', id: 1 },
  { name: 'Filosofía y Valores del Taekwondo', id: 2 },
  { name: 'Taekwondo en la Actualidad', id: 3 },
  { name: 'Taekwondo Fénix', id: 4 },
  { name: 'Misión y Visión', id: 5 },
  { name: 'Significado del Taekwondo y sus Componentes', id: 6 },
  { name: 'Taeguk y Formas', id: 7 },
  { name: 'Vocabulario y Conceptos Clave', id: 8 },
  { name: 'Fundamentos y Técnicas del Taekwondo', id: 9 },
  { name: 'Acciones Prohibidas en Combate', id: 10 },
];

export const info = [
  { 
    name: 'Qué es el Taekwondo', 
    id_category: 1, 
    text: 'Es un arte marcial originario de Corea y practicado hace miles de años,<br>' +
    'en el cual se utilizan técnicas de defensa y ataque, convertido en uno de los estilos de defensa personal más efectivos del mundo.'+
    'Utiliza la fuerza, velocidad, coordinación, potencia, precisión y la resistencia cardiovascular y muscular.'+
    'Es una disciplina que ayuda a formar el carácter, brinda la  seguridad en sí mismo, enseña a convivir con otras personas,'+ 
    'logra descargar tensiones y agresividad provocando un estado de relajación en el practicante que lo ayudara a aprovechar '+
    'mejor sus cualidades de cara a los estudios, el trabajo y a la relación con sus semejantes. Busca la plenitud total del hombre, un cuerpo sano en armonía con un espíritu limpio y '+
    'generoso. Es un deporte que ofrece una mejoría considerable '+
    'de la condición física de sus practicantes, debido al nivel tan '+
    'riguroso de los entrenamientos. Es una técnica que ofrece al '+
    'practicante la posibilidad de herir a un adversario, pero no es el '+
    'fin buscado, sino que se busca la paz con los semejantes. '+
    '(Aprender a pelear para no pelear).'  
  },
  { name: 'Origen y historia', id_category: 1 },
  { name: 'Filosofía subyacente', id_category: 2}
]

export const belts = [
  { 
    id: 1, 
    name: 'Blanco', 
    color: 'White', 
  },
  { 
    id: 2 , 
    name: 'Amarillo (KWANG TI)', 
    color: 'Yellow' ,
    img: '~/imgs/yellow-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  { 
    id: 3 , 
    name: 'Verde (Rok-ti)', 
    color: 'Green' ,
    img: '~/imgs/green-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  { 
    id: 5 , 
    name: 'Azul (Chong-ti)', 
    color: 'red' ,
    img: '~/imgs/blue-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  { 
    id: 4 , 
    name: 'Rojo (Jong-ti)', 
    color: 'red' ,
    img: '~/imgs/red-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  
];





  
  