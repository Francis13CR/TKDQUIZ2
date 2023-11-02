const imageSourceModule = require("@nativescript/core/image-source");

function imageToBase64(path) {
  let imageSource = imageSourceModule.fromFile(path);
  return imageSource.toBase64String("png");
}
let cssContent = `
ul {
  text-align: left;
  margin-bottom: 5px;
  padding-left: 6px;
}
li {
  margin-bottom: 5px;
}
`;

export const categories = [
  { name: 'Introducción al Taekwondo', id: 1 },
  { name: 'Filosofía del Taekwondo.', id: 2 },
  { name: 'Taekwondo en la Actualidad', id: 3 },
  { name: 'Taekwondo Fénix', id: 4 },
  // { name: 'Misión y Visión', id: 5 },
  { name: 'Significado del Taekwondo y sus Componentes', id: 5 },
  { name: 'Taeguk y Formas', id: 6 },
  { name: 'Tips de poomsae', id: 7 },
  { name: 'Vocabulario y Conceptos Clave', id: 8 },
  { name: 'Partes del cuerpo', id: 9 },
  { name: 'Numeros en coreano', id: 10 },
  { name: 'Fundamentos básicos', id: 11 },
  { name: 'Fundamentos Practicos', id: 12 },
  { name: 'Acciones Prohibidas en Combate', id: 13 },
];

export const info = [
  {
    name: 'Acciones Prohibidas GAMCHON ',
    id_bell: 0,
    id_category: 13, 
    text: `
    <style>
    ${cssContent}
   </style>
    <div>
      <ul>
          <li>Evadir al oponente dando la espalda o agachándose</li>
          <li>Caer al piso intencionalmente</li>
          <li>Evitar el combate</li>
          <li>Agarrar, retener o empujar al oponente</li>
          <li>Atacar por debajo de la cintura</li>
          <li>Fingir lesión</li>
          <li>Cabezazo o ataque con la rodilla</li>
          <li>Golpear la cara del oponente con la mano</li>
          <li>Cruzar la línea límite</li>
          <li>Mostrar mala conducta por parte del competidor o coach</li>
          <li>Levantar la rodilla para evitar un ataque</li>
          <li>Pasividad de parte de los competidores durante el combate</li>
          <li>Atacar al oponente después de kalyo</li>
          <li>Atacar al oponente caído</li>
          <li>Derribar al oponente, sujetándolo o empujándolo</li>
          <li>Golpear la cara del oponente con la mano</li>
          <li>Atacar con intención por debajo de la cintura</li>
          <li>Interrumpir el combate por parte del competidor o coach</li>
          <li>Comportamientos violentos del competidor o coach</li>
          <li>Evitar intencionalmente el combate</li>
          <li>Manipular el sistema PSS antes de cada round</li>
      </ul>
    </div>
    `
  },
  {
    name: 'Fundamentos Practicos',
    id_bell: 0,
    id_category: 12,
    text: `
    <style>
      ${cssContent}
    </style>
    <div>
    <p><strong>FUNDAMENTOS PRÁCTICOS</strong></p>
    <ul>
        <li><strong>AP SOGUI ARE MAKI:</strong> Defensa abajo con la pierna adelantada.</li>
        <li><strong>AP SOGUI MONTONG AN MAKI:</strong> Defensa al medio, brazo contrario al pie adelantado.</li>
        <li><strong>AP SOGUI MONTONG MAKI:</strong> Defensa al medio, brazo igual al pie adelantado.</li>
        <li><strong>AP SOGUI OLGUL MAKI:</strong> Defensa arriba con la pierna adelantada.</li>
        <li><strong>AP CUBI SOGUI MONTONG BANDE CHIRIGUI:</strong> Golpe de frente al medio, coincidiendo con el pie adelantado.</li>
        <li><strong>AP SOGUI MONTONG BARO CHIRIGUI:</strong> Golpe de frente al medio, contrario al pie adelantado.</li>
        <li><strong>AP CUBI SOGUI OLGUL BANDE CHIRIGUI:</strong> Golpe de frente a la cara, coincidiendo con el pie adelantado.</li>
        <li><strong>AP CUBI SOGUI MONTONG DUBON CHIRIGUI:</strong> Golpe de frente abajo, coincidiendo con el pie adelantado.</li>
    </ul>
    </div>
     `
  },
  {
    name: 'Fundamentos básicos',
    id_bell: 0,
    id_category: 11,
    text: `
    <style>
      ${cssContent}
    </style>
    <div>
    <p><strong>FUNDAMENTOS BÁSICOS</strong></p>

    <p><strong>MAKI = DEFENSA</strong></p>
    <ul>
        <li><strong>Are Maki:</strong> Defensa abajo.</li>
        <li><strong>Montong Maki:</strong> Defensa al medio, brazo igual al pie adelantado.</li>
        <li><strong>Montong an Maki:</strong> Defensa al medio, brazo contrario al pie adelantado.</li>
        <li><strong>Olgul Maki:</strong> Defensa arriba.</li>
    </ul>
    <img src='data:image/png;base64,${imageToBase64("~/imgs/defensas.jpg")}' alt="defensas" style="width: 100%; height: auto; margin: 20px 0px;">
    
    <p><strong>CHIRIGUI = GOLPE</strong></p>
    <ul>
        <li><strong>Montong Bande Chirigui:</strong> Golpe de frente al medio, coincidiendo con el pie adelantado.</li>
        <li><strong>Montong Baro Chirigui:</strong> Golpe de frente al medio, contrario al pie adelantado.</li>
        <li><strong>Olgul Bande Chirigui:</strong> Golpe de frente a la cara, coincidiendo con el pie adelantado.</li>
    </ul>
    
    <p><strong>SOGUI = POSICIÓN</strong></p>
    <ul>
        <li><strong>Moa Sogui:</strong> Posición de pies juntos.</li>
        <li><strong>Naranji Sogui:</strong> Posición de pies abiertos al ancho de los hombros.</li>
        <li><strong>Ap Sogui:</strong> Posición corta de frente, es un paso normal de caminar.</li>
        <li><strong>Ap Cubi Sogui:</strong> Posición larga de frente (3 a 4 pasos de largo), es un paso y medio, pierna de atrás recta y pierna delantera flexionada.</li>
    </ul>
    
    <p><strong>CHAGUI = PATADA</strong></p>
    <ul>
        <li><strong>Ap Chagui:</strong> Patada al frente con la bola del pie.</li>
        <li><strong>Bandal Chagui:</strong> Patada al medio con empeine.</li>
        <li><strong>Tolio Chagui:</strong> Patada a la cabeza.</li>
        <li><strong>Miro Chagui:</strong> Patada de empuje con la planta del pie.</li>
    </ul>
    </div>
    `    
  },

  {
    id_category: 10,
    name: 'Números en coreano',
    id_bell: 0,
    text: `
    <style>
      ${cssContent}
    </style>
    <div>
      <ul>
        <li>JANA = Uno</li>
        <li>DUL = Dos</li>
        <li>SET = Tres</li>
        <li>NET = Cuatro</li>
        <li>DASOT = Cinco</li>
        <li>IOSOT = Seis</li>
        <li>ILKOP = Siete</li>
        <li>IODOL = Ocho</li>
        <li>AJOP = Nueve</li>
        <li>IOL = Diez</li>
        <li>SUMUL = Veinte</li>
        <li>SORUM = Treinta</li>
      </ul>
    </div>
    `
  },
  {
    id_category: 9,
    name: 'Partes del cuerpo',
    id_bell: 0,
    text: `
    <style>
    ${cssContent}
   </style>
      <div>
      <ul>
        <li>Mom = Cuerpo</li>
        <li>Muori = Cabeza</li>
        <li>Ima = Frente</li>
        <li>Num = Ojos</li>
        <li>Ko = Nariz</li>
        <li>Kwi = Oreja</li>
        <li>I = Dientes</li>
        <li>Ip = Boca</li>
        <li>Ipsul = Labios</li>
        <li>Tuok = Barbilla</li>
        <li>Mok = Cuello</li>
        <li>Oke = Hombro</li>
        <li>Gasum = Pecho</li>
        <li>Pal = Brazo</li>
        <li>Palkup = Codo</li>
        <li>Palmok = Antebrazo</li>
        <li>Son = Mano</li>
        <li>Sonmok = Muñeca</li>
        <li>Sonnal = Canto de la mano</li>
        <li>Sonkarat = Dedos de la mano</li>
        <li>Chumok = Puño</li>
        <li>Be = Estomago</li>
        <li>Galbi = Costillas</li>
        <li>Dung = Espalda</li>
        <li>Ondungui = Glúteos</li>
        <li>Dari = Pierna</li>
        <li>Jiobiokchi = Muslo</li>
        <li>Murup = Rodilla</li>
        <li>Jeonggangyi = Espinilla</li>
        <li>Bal = Pie</li>
        <li>Balmok = Tobillo</li>
        <li>Balnal = Canto del pie</li>
        <li>Baldung = Empeine</li>
        <li>Balkarat = Dedos del pie</li>
        <li>Apchuk = Bola del pie</li>
        <li>Dikumchi = Talón del pie</li>
      </ul>
      </div>
    `
  },
  {
    id_category: 8,
    name : "Vocabulario General",
    id_bell: 0,
    text : `
    <style>
    ${cssContent}
   </style>
    <div>
    <ul>
      <li style="text-align: left;">Sabonim = Profesor</li>
      <li>Dobok = Uniforme</li>
      <li>Ti = Cinta</li>
      <li>Dochang = Salón de clases o Area de combate</li>
      <li>Kukki = Bandera</li>
      <li>Chariot = Firmes</li>
      <li>Kiune = Saludo</li>
      <li>Chumbi = Preparados o Posición de combate</li>
      <li>Kiap = Grito</li>
      <li>Sichak = Empezar</li>
      <li>Barot = Terminar</li>
      <li>Kalyo = Detenerse o Separarse</li>
      <li>Kesok = Continuar</li>
      <li>Kuman = Alto, No más</li>
      <li>Chong = Azul</li>
      <li>Jong = Rojo</li>
      <li>Sun = Ganador</li>
      <li>Bijing = Empate</li>
      <li>Kyongo = Amonestación (Medio punto)</li>
      <li>Gamchon = Deducción (Un punto)</li>
      <li>Maki = Defensa</li>
      <li>Chirigui = Golpe</li>
      <li>Sogui = Posicion</li>
      <li>Chagui = Patada</li>
      <li>Ap = Al frente</li>
      <li>Iop = De lado</li>
      <li>Dui = Hacia atrás</li>
      <li>Bande = Igual</li>
      <li>Baro = Contrario</li>
      <li>Uen = Izquierdo</li>
      <li>Orum = Derecho</li>
      <li>Anyio = Sentarse</li>
      <li>Kirits = Levantarse</li>
      <li>Ap Fro = Avanzar</li>
      <li>Di Fro = Retroceder</li>
      <li>Tirodorat = Volverse</li>
      <li>Sabomin Kie Kiune = Saludo al profesor</li>
      <li>Kukki Dejadio Kiune = Saludo a las banderas</li>
      <li>Kansa Jamnida = Muchas gracias</li>
    </ul>
    </div>`
  },
  {
    id_category: 7,
    name: `Aspectos para Mejorar las Formas`,
    id_bell: 0,
    text: `
    <style>
    ${cssContent}
   </style>
    <div>
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
    </div>`
  },
  {
    name: '¿Qué son las Taeguk?',
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
    <style>
    ${cssContent}
   </style>
    <div>
    <p>Las Taeguk son una serie de movimientos coordinados y sistematizados que simulan un combate con varios oponentes.</p>
    <p><strong>Tae:</strong> Grandeza</p>
    <p><strong>Guk:</strong> Eternidad</p>
    
    <h2>Taeguk Básicas</h2>
    <ul>
        <li><strong>Taeguk il Chang:</strong> Cielo y Luz (18 movimientos) <br><a href="https://www.youtube.com/embed/bP_5GYMC0GQ?si=0fUM3nb4emd2Bnvb"> Ver video </a> <br><br>
        <iframe width="320" height="320" src="https://www.youtube.com/embed/bP_5GYMC0GQ?si=u6XZx5kjpJwQepmv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </li>
        <li><strong>Taeguk i Chang:</strong> Júbilo y Alegría (18 movimientos) <br>  <a href="https://www.youtube.com/embed/hAjxTL4p2mQ?si=0Wg4vpNZJR3jbWzL"> Ver video </a> <br><br> 
        <iframe width="320" height="310" src="https://www.youtube.com/embed/hAjxTL4p2mQ?si=m_V6gK9Fz3Bbd7sh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </li>
    </ul>
    </div>
    `
  },


  {
    name: 'Significados',
    id_category: 5,
    id_bell: 0,
    videos: [],
    text: `
    <style>
     ${cssContent}
    </style>
    <div>
    <h2>Significado del Taekwondo</h2>
    <p><strong>TAE:</strong> Saltar, patear, majar</p>
    <p><strong>KWON:</strong> Golpe con la mano</p>
    <p><strong>DO:</strong> Camino, vocación o forma de arte marcial</p>
    </div>
    <div>
    <h2 >Valores del Taekwondo</h2>
    <ul>
        <li>Honor</li>
        <li>Autocontrol</li>
        <li>Cortesía</li>
        <li>Coraje</li>
        <li>Paciencia</li>
        <li>Modestia</li>
    </ul>
    </div>
    <div>
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
    </div>
    `
  },
 
  {
    name: 'Academia Fenix',
    id_category: 4,
    id_bell: 0,
    videos: [],
    text: `
    <style>
    ${cssContent}
   </style>
   <div>
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
    </div>
    `
  },
  {
    name: 'Taekwondo en tiempos modernos',
    id_category: 3,
    id_bell: 0,
    videos: [],
    text : `  
    <style>
    ${cssContent}
   </style> 
   <div>
      <p>
        La Federación Mundial de Taekwondo (WTF) es el ente rector del Taekwondo en todo el mundo, está ubicada en Seúl, Corea y fue fundada en 1973.
      </p>

      <p>
        El Taekwondo fue introducido en Costa Rica por el Profesor Aquiles Wong Kun Yan en 1969.
      </p>
      
      <p>
        La Federación Costarricense de Taekwondo es el ente rector del taekwondo a nivel nacional y es liderada por el presidente Wilmar Alvarado.
      </p>
    </div> 
      `
  },
  { 
    name: '¿Qué es el Taekwondo?', 
    id_category: 1, 
    id_bell : 0,
    videos: [],
    text:  `
    <style>
    ${cssContent}
   </style>
    <div>
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
    </div>
    ` 
  },
  { name: 'Filosofía y honor subyacente', 
    id_category: 2,
    videos: [],
    id_bell : 0,
    text: `
    <style>
    ${cssContent}
    </style>
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





  
  