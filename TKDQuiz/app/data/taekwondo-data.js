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
  // { name: 'Misión y Visión', id: 5 },
  { name: 'Significado del Taekwondo y sus Componentes', id: 5 },
  { name: 'Taeguk y Formas', id: 6 },
  { name: 'Vocabulario y Conceptos Clave', id: 7 },
  { name: 'Fundamentos y Técnicas del Taekwondo', id: 8 },
  { name: 'Acciones Prohibidas en Combate', id: 9 },
];

export const info = [
  {
    name: 'Taeguk',
    id_category: 6,
    id_bell: 2,
    videos: [
      {
        title: 'Taeguk 1',
        url: 'https://www.youtube.com/embed/bP_5GYMC0GQ?si=0fUM3nb4emd2Bnvb',
      },
      {
        title: 'Taeguk 2',
        url: 'https://www.youtube.com/embed/hAjxTL4p2mQ?si=0Wg4vpNZJR3jbWzL',
      },
      // ... Puedes agregar hasta 10 videos aquí
    ],
    text: `
    <p>Las Taeguk son una serie de movimientos coordinados y sistematizados que simulan un combate con varios oponentes.</p>
    <p><strong>Tae:</strong> Grandeza</p>
    <p><strong>Guk:</strong> Eternidad</p>
    
    <h2>Taeguk Básicas</h2>
    <ul>
        <li><strong>Taeguk il Chang:</strong> Cielo y Luz (18 movimientos)
        </li>
        <li><strong>Taeguk i Chang:</strong> Júbilo y Alegría (18 movimientos)</li>
    </ul>
    <a href="" style=" font-weight: bold;color: #FF5733;text-align: center;margin-top: 20px;">¡Mira los videos de referencia al final de esta sección!</a>
    
    <h2>Aspectos para Mejorar las Formas</h2>
    <ul>
        <li>Foco</li>
        <li>Respeto de posiciones</li>
        <li>Precisión</li>
        <li>Balance (Equilibrio)</li>
        <li>Conocer bien la secuencia</li>
        <li>Concentración</li>
        <li>Potencia</li>
        <li>Respiración</li>
        <li>Velocidad</li>
        <li>Tiempos</li>
        <li>Terminar en el punto donde se empezó</li>
        <li>Coordinación</li>
        <li>Buena postura</li>
    </ul>
    `
  },


  {
    name: 'Significados',
    id_category: 5,
    id_bell: 0,
    videos: [],
    text: `
    <h2>Significado del Taekwondo</h2>
    <p><strong>TAE:</strong> Saltar, patear, majar</p>
    <p><strong>KWON:</strong> Golpe con la mano</p>
    <p><strong>DO:</strong> Camino, vocación o forma de arte marcial</p>
    
    <h2>Valores del Taekwondo</h2>
    <ul>
        <li>Honor</li>
        <li>Autocontrol</li>
        <li>Cortesía</li>
        <li>Coraje</li>
        <li>Paciencia</li>
        <li>Modestia</li>
    </ul>
    
    <h2>Nombres y Significados de los Cinturones</h2>
    <ul>
        <li>
            <strong>Cinturón Blanco (Bek-ti)</strong>: Representa la pureza y marca el comienzo del viaje en el Taekwondo.
        </li>
        <li>
            <strong>Cinturón Amarillo (Kwang-ti)</strong>: Simboliza el amanecer, el crecimiento y el desarrollo.
        </li>
        <li>
            <strong>Cinturón Verde (Rok-ti)</strong>: Representa la primavera, el progreso y el florecimiento.
        </li>
        <li>
            <strong>Cinturón Azul (Chong-ti)</strong>: Simboliza la fluidez del agua y la adaptabilidad en el Taekwondo.
        </li>
        <li>
            <strong>Cinturón Rojo (Jong-ti)</strong>: Representa el fuego y la pasión por el arte marcial.
        </li>
        <li>
            <strong>Cinturón Negro (Juk-ti)</strong>: El cinturón negro simboliza el honor y la maestría en el Taekwondo.
        </li>
    </ul>
    `
  },
 
  {
    name: 'Academia Fenix',
    id_category: 4,
    id_bell: 0,
    videos: [],
    text: `
    <p>
      <strong>Taekwondo Fénix</strong> surge del compromiso de un grupo de entrenadores liderados por el profesor y fundador <strong>Luis Lobo Rojas</strong>, con el objetivo de llevar el taekwondo y sus estudiantes a otro nivel deportivo y marcial. Se enfocan en potenciar las habilidades de cada estudiante y consolidar estrategias, promoviendo el trabajo duro y el esfuerzo continuo.
    </p>

    <p>
      El nombre de <strong>Taekwondo Fénix</strong> se inspira en el ave Fénix, que simboliza la <em>resiliencia</em>. Al igual que el Fénix que puede sobrevivir a la destrucción y resurgir, en el deporte, la resiliencia es una cualidad fundamental. Los atletas enfrentan obstáculos, fracasos y lesiones, pero aquellos que son capaces de levantarse y continuar con determinación son los que logran alcanzar el éxito. Además, en el deporte, los atletas pueden experimentar transformaciones significativas a medida que desarrollan habilidades, mejoran su condición física y superan sus propios límites. Este proceso de entrenamiento y competencia puede moldear a los deportistas en personas más fuertes, disciplinadas y capaces, no solo en el deporte, sino también en la vida. El objetivo es crear seres humanos más integrales.
    </p>
    <h2 class="text-center">Misión</h2>
    <p>
        Nuestra misión es fomentar el desarrollo integral de los y las jóvenes a través de la práctica del taekwondo. Buscamos brindarles una formación sólida en esta disciplina marcial y promover valores positivos como el respeto, la disciplina, la perseverancia y la autoconfianza. Nuestro objetivo es ayudar a nuestros y nuestras estudiantes a alcanzar su máximo potencial físico y mental.
    </p>

    <h2 class="text-center">Visión</h2>
    <p>
        Nuestra visión es convertirnos en una academia de taekwondo de renombre, reconocida por su excelencia en la enseñanza y formación de jóvenes. Aspiramos a ser un referente en la comunidad, donde los y las jóvenes encuentren un espacio seguro y motivador para desarrollar habilidades físicas, fortalecer su carácter y cultivar una mentalidad positiva. Nos esforzamos por formar campeones no solo en el arte marcial, sino también en la vida, guiándolos hacia un camino de autodisciplina, resiliencia y liderazgo.
    </p>
    `
  },
  {
    name: 'Taekwondo en tiempos modernos',
    id_category: 3,
    id_bell: 0,
    videos: [],
    text : `   
      <p>
        La Federación Mundial de Taekwondo (WTF) es el ente rector del Taekwondo en todo el mundo, está ubicada en Seúl, Corea y fue fundada en 1973.
      </p>

      <p>
        El Taekwondo fue introducido en Costa Rica por el Profesor Aquiles Wong Kun Yan en 1969.
      </p>
      
      <p>
        La Federación Costarricense de Taekwondo es el ente rector del taekwondo a nivel nacional y es liderada por el presidente Wilmar Alvarado.
      </p>`
  },
  { 
    name: '¿Qué es el Taekwondo?', 
    id_category: 1, 
    id_bell : 0,
    videos: [],
    text:  `
    <p>
      El <strong>Taekwondo</strong> es un arte marcial originario de Corea practicado durante miles de años. En este arte, se emplean técnicas de defensa y ataque, convirtiéndolo en uno de los estilos de defensa personal más efectivos en el mundo.
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
  { name: 'Filosofía y honor subyacente', 
    id_category: 2,
    videos: [],
    id_bell : 0,
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
    color: 'yellow' ,
    img: '~/imgs/yellow-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  { 
    id: 3 , 
    name: 'Verde (Rok-ti)', 
    color: 'green' ,
    img: '~/imgs/green-belt.png',
    text: '<p>El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.<p>' 
  },
  { 
    id: 5 , 
    name: 'Azul (Chong-ti)', 
    color: 'blue' ,
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





  
  