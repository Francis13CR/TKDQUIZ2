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
  { name: 'Filosofía del Taekwondo.', id: 2 },
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
    text:  `
    <p>
      <strong>Taekwondo</strong> es un arte marcial originario de Corea practicado durante miles de años. En este arte, se emplean técnicas de defensa y ataque, convirtiéndolo en uno de los estilos de defensa personal más efectivos en el mundo.
    </p>
    
    <p>
      Utiliza la fuerza, velocidad, coordinación, potencia, precisión y la resistencia cardiovascular y muscular. Más que un deporte, el Taekwondo es una disciplina que ayuda a formar el carácter, brinda seguridad en uno mismo y enseña a convivir con otras personas. Además, permite liberar tensiones y agresividad, promoviendo un estado de relajación que beneficia al practicante en su vida cotidiana, estudios y relaciones interpersonales.
    </p>
    
    <p>
      El Taekwondo busca la plenitud total del individuo, fomentando un cuerpo sano en armonía con un espíritu limpio y generoso.
    </p>
    
    <p>
      Se trata de un deporte que ofrece una mejora significativa en la condición física de sus practicantes debido a la intensidad de los entrenamientos.
    </p>
    
    <p>
      Aunque el Taekwondo proporciona al practicante la habilidad de herir a un adversario, este no es el objetivo buscado. En cambio, se busca la paz y la convivencia armoniosa con los demás. Como dice el lema: <strong>"Aprender a pelear para no pelear"</strong>.
    </p>
    ` 
  },
  { name: 'Filosofía y honor subyacente', id_category: 2,
    text: `
    <p>
      El Taekwondo es un arte marcial que tiene su origen en <strong>Corea</strong>, por lo que a lo largo de su historia ha desarrollado una gran tradición filosófica y espiritual.
    </p>
    
    <p>
      El uniforme (dobok) representa tres elementos:
      <ul>
        <li>La gabacha: representa el cielo.</li>
        <li>El pantalón: representa la tierra.</li>
        <li>El cinturón: representa la persona.</li>
      </ul>
      El anudarse el cinturón (Ti) tiene como significado el orden y la apariencia personal; las dos puntas tienen que estar del mismo tamaño, lo que representa el equilibrio.
    </p>
    
    <p>
      La bandera coreana (Tae Kukki) simboliza la forma de pensar, la filosofía y el misticismo de los coreanos.
    </p>
    
    <p>
      El código de honor del Taekwondo consiste en:
      <ul>
        <li>Respeto a la nación.</li>
        <li>Respeto y obediencia a los padres.</li>
        <li>Honor a los amigos.</li>
        <li>Justicia y omisión a la violencia innecesaria.</li>
        <li>El valor.</li>
      </ul>
    </p>
    `
  }
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





  
  