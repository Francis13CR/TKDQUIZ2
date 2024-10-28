
const imageSourceModule = require("@nativescript/core/image-source");

function imageToBase64(path) {
  let imageSource = imageSourceModule.fromFile(path);
  return imageSource.toBase64String("png");
}
/*
let dark = false;
const application = require("@nativescript/core/application");

function getSystemAppearance() {
    const currentAppearance = application.systemAppearance();
    console.log("Current system appearance:", currentAppearance);

    if (currentAppearance === "dark") {
        // El sistema está en modo oscuro
        dark = true;
        console.log("El sistema está en modo oscuro");
    } else {
        dark = false;
        // El sistema está en modo claro
        console.log("El sistema está en modo claro");
    }
}

// Llama a la función para verificar el tema actual
getSystemAppearance();

// Escucha cambios en el tema del sistema (por si cambia mientras la app está en ejecución)
application.on("systemAppearanceChanged", (args) => {
    console.log("System appearance changed to:", args.newValue);
    if (args.newValue === "dark") {
        dark = true;
        // El sistema ha cambiado a modo oscuro
        console.log("El sistema ha cambiado a modo oscuro");
    } else {
        dark = false;
        // El sistema ha cambiado a modo claro
        console.log("El sistema ha cambiado a modo claro");
    }
});


*/




let cssContent = `
div {
  font-family: Arial, sans-serif;
}
ul {
  text-align: left;
  margin-bottom: 5px;
  padding-left: 6px;
  list-style-type: disc;
}
li {
  margin: 5px 0;
}
.responsive-iframe {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Ratio 16:9 (9 / 16 = 56.25%) */
}

.responsive-iframe iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.outlined-text {
  color: black;
  text-shadow: 1px 0 0 white, -1px 0 0 white, 0 1px 0 white, 0 -1px 0 white, 1px 1px white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white;
}

div *, body * {
  color: #808080;

  font-family: Arial, sans-serif;
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

export const fundamentosBasicos = [
  {
    id_bell: 5,
    fundamentos: [
      {
        section: 'Defensas',
        name: 'Maki = Defensa',
      },
      {
        section: 'Defensas',
        name: 'Jan Sonnal Montong Bakat Maki',
        description: 'Defensa al medio con el canto de la mano.',
      },
      {
        section: 'Defensas',
        name: 'Sonnal Montong Maki',
        description: 'Defensa al medio de lado con el canto de la mano asistida por el brazo contrario que protege la zona media.',
      },
      {
        section: 'Defensas',
        name: 'Batangson Montong An Maki',
        description: 'Defensa al medio con la base de la mano, contrario al pie adelantado.',
      },
      {
        section: 'Defensas',
        name: 'Montong Gecho Maki',
        description: 'Defensa al medio para agarre, con brazos cruzados.',
      },
      {
        section: 'Defensas',
        name: 'Goduro Montong Bakat Maki',
        description: 'Defensa doble al medio (defensa de combate).',
      },
      {
        section: 'Defensas',
        name: 'Oe Santul Maki',
        description: 'Defensa doble, una mano defiende abajo y la otra mano defiende arriba, en sentido contrario.',
      },
      {
        section: 'Golpes',
        name: 'Chirigui = Golpe',
      },
      {
        section: 'Golpes',
        name: 'Jan Sonnal Mok Chigui',
        description: 'Golpe al cuello con canto de la mano, contrario al pie.',
      },
      {
        section: 'Golpes',
        name: 'Chebipum Mok Chigui',
        description: 'Golpe al cuello con el canto de la mano asistido por el brazo contrario que protege la cara con la mano abierta.',
      },
      {
        section: 'Golpes',
        name: 'Dung Chumok Ap Chigui',
        description: 'Golpe a la cara con el reverso del puño.',
      },
      {
        section: 'Golpes',
        name: 'Dung Chumok Olgul Bakat Chigui',
        description: 'Golpe a la cara, hacia afuera, con el reverso del puño.',
      },
      {
        section: 'Golpes',
        name: 'Iop Chirigui',
        description: 'Golpe de lado.',
      },
      {
        section: 'Golpes',
        name: 'Dankiok Tuok Chigui',
        description: 'Golpe a la barbilla, sujetando con el brazo contrario.',
      },
      {
        section: 'Posiciones',
        name: 'Sogui = Posición',
      },
      {
        section: 'Posiciones',
        name: 'Moa Sogui',
        description: 'Posición de pies juntos.',
      },
      {
        section: 'Posiciones',
        name: 'Naranji Sogui',
        description: 'Posición de frente, pies abiertos al ancho de los hombros.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Sogui',
        description: 'Posición de frente, es un paso normal de caminar.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Cubi Sogui',
        description: 'Posición larga de frente, es un paso y medio, pierna de atrás recta y pierna delantera flexionada con un 70% del peso.',
      },
      {
        section: 'Posiciones',
        name: 'Di Cubi Sogui',
        description: 'Posición de lado, formando un ángulo de 90 grados y ambas piernas flexionadas, la pierna de atrás apoyada con un 70% del peso.',
      },
      {
        section: 'Posiciones',
        name: 'Koa Sogui',
        description: 'Posición de pies cruzados.',
      },
      {
        section: 'Posiciones',
        name: 'Bom Sogui',
        description: 'Posición del tigre, con el pie delantero recogido apoyado sobre la bola del pie, la pierna de atrás totalmente apoyada con un 90% del peso.',
      },
      {
        section: 'Patadas',
        name: 'Chagui = Patada',
      },
      {
        section: 'Patadas',
        name: 'Ap Chagui',
        description: 'Patada al frente con la bola del pie.',
      },
      {
        section: 'Patadas',
        name: 'Iop Chagui',
        description: 'Patada de lado con el canto del pie.',
      },
      {
        section: 'Patadas',
        name: 'Dui Chagui',
        description: 'Patada hacia atrás con el talón.',
      },
    ]
  },
  {
    id_bell: 4,
    fundamentos: [
      {
        section: 'Defensas',
        name: 'Maki = Defensa',
      },
      {
        section: 'Defensas',
        name: 'Jan Sonnal Montong Bakat Maki',
        description: 'Defensa al medio con el canto de la mano.',
      },
      {
        section: 'Defensas',
        name: 'Sonnal Montong Maki',
        description: 'Defensa al medio de lado con el canto de la mano asistida por el brazo contrario que protege la zona media.',
      },
      {
        section: 'Defensas',
        name: 'Batangson Montong Maki',
        description: 'Defensa al medio con la base de la mano.',
      },
      {
        section: 'Defensas',
        name: 'Montong Bakat Maki',
        description: 'Defensa al medio hacia afuera.',
      },
      {
        section: 'Defensas',
        name: 'Jan Sonnal Olgul Bituro Maki',
        description: 'Defensa a la cara con el canto de la mano, con torsión del cuerpo.',
      },
      {
        section: 'Golpes',
        name: 'Chirigui = Golpe',
      },
      {
        section: 'Golpes',
        name: 'Jan Sonnal Mok Chigui',
        description: 'Golpe al cuello con canto de la mano, contrario al pie.',
      },
      {
        section: 'Golpes',
        name: 'Chebipum Mok Chigui',
        description: 'Golpe al cuello con el canto de la mano asistido por el brazo contrario que protege la cara con la mano abierta.',
      },
      {
        section: 'Golpes',
        name: 'Dung Chumok Ap Chigui',
        description: 'Golpe a la cara con el reverso del puño.',
      },
      {
        section: 'Golpes',
        name: 'Palkup Tolio Chigui',
        description: 'Golpe a la cara con el codo.',
      },
      {
        section: 'Golpes',
        name: 'Palkup Piochock Chigui',
        description: 'Golpe al medio con el codo, sujetando con el brazo contrario (choque).',
      },
      {
        section: 'Posiciones',
        name: 'Sogui = Posición',
      },
      {
        section: 'Posiciones',
        name: 'Moa Sogui',
        description: 'Posición de pies juntos.',
      },
      {
        section: 'Posiciones',
        name: 'Naranji Sogui',
        description: 'Posición de frente, pies abiertos al ancho de los hombros.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Sogui',
        description: 'Posición de frente, es un paso normal de caminar.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Cubi Sogui',
        description: 'Posición larga de frente, es un paso y medio, pierna de atrás recta y pierna delantera flexionada.',
      },
      {
        section: 'Posiciones',
        name: 'Di Cubi Sogui',
        description: 'Posición de lado, formando un ángulo de 90 grados y ambas piernas flexionadas.',
      },
      {
        section: 'Posiciones',
        name: 'Koa Sogui',
        description: 'Posición de pies cruzados.',
      },
      {
        section: 'Patadas',
        name: 'Chagui = Patada',
      },
      {
        section: 'Patadas',
        name: 'Ap Chagui',
        description: 'Patada al frente con la bola del pie.',
      },
      {
        section: 'Patadas',
        name: 'Iop Chagui',
        description: 'Patada de lado con el canto del pie.',
      },
      {
        section: 'Patadas',
        name: 'Tolio Chagui',
        description: 'Patada a la cara con el empeine.',
      },
    ]
  },
  {
    id_bell: 3,
    fundamentos: [
      {
        section: 'Defensas',
        name: 'Maki = Defensa',
      },
      {
        section: 'Defensas',
        name: 'Are Maki',
        description: 'Defensa abajo.',
      },
      {
        section: 'Defensas',
        name: 'Montong Maki',
        description: 'Defensa al medio, brazo igual al pie adelantado.',
      },
      {
        section: 'Defensas',
        name: 'Montong An Maki',
        description: 'Defensa al medio, brazo contrario al pie adelantado.',
      },
      {
        section: 'Defensas',
        name: 'Olgul Maki',
        description: 'Defensa arriba.',
      },
      {
        section: 'Defensas',
        name: 'Jan Sonnal Montong Bakat Maki',
        description: 'Defensa al medio de lado con el canto de la mano.',
      },
      {
        section: 'Defensas',
        name: 'Sonnal Montong Maki',
        description: 'Defensa al medio de lado con el canto de la mano asistida por el brazo contrario que protege la zona media.',
      },
      {
        section: 'Defensas',
        name: 'Montong Bakat Maki',
        description: 'Defensa al medio hacia afuera con el puño cerrado.',
      },
      {
        section: 'Golpes',
        name: 'Chirigui = Golpe',
      },
      {
        section: 'Golpes',
        name: 'Montong Bande Chirigui',
        description: 'Golpe de frente al medio, coincidiendo con el pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Montong Baro Chirigui',
        description: 'Golpe de frente al medio, contrario al pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Olgul Bande Chirigui',
        description: 'Golpe de frente a la cara, coincidiendo con el pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Montong Dubon Chirigui',
        description: 'Doble golpe al frente',
      },
      {
        section: 'Golpes',
        name: 'Jan Sonnal Mok Chigui',
        description: 'Golpe al cuello con canto de la mano, contrario al pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Batason nulo maki Pion Sonkut Sewo Chigui',
        description: 'Golpe al medio con la punta de los dedos con apoyo del brazo contrario.',
      },
      {
        section: 'Golpes',
        name: 'Chebipum Mok Chigui',
        description: 'Golpe al cuello con el canto de la mano asistido por el brazo contrario que protege la cara con la mano abierta.',
      },
      {
        section: 'Golpes',
        name: 'Dung Chumok Ape Chigui',
        description: 'Golpe a la cara con el reverso del puño.',
      },
      {
        section: 'Patadas',
        name: 'Chagui = Patada',
      },
      {
        section: 'Patadas',
        name: 'Ap Chagui',
        description: 'Patada al frente con la bola del pie.',
      },
      {
        section: 'Patadas',
        name: 'Bandal Chagui',
        description: 'Patada al frente con el empeine.',
      },
      {
        section: 'Patadas',
        name: 'Tolio Chagui',
        description: 'Patada a la cabeza',
      },
      {
        section: 'Patadas',
        name: 'Miro Chagui',
        description: 'Patada de empuje con la planta del pie.',
      },
      {
        section: 'Posiciones',
        name: 'Sogui = Posición',
      },
      {
        section: 'Posiciones',
        name: 'Moa Sogui',
        description: 'Posición de pies juntos.',
      },
      {
        section: 'Posiciones',
        name: 'Naranji Sogui',
        description: 'Posición de frente, pies abiertos al ancho de los hombros.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Sogui',
        description: 'Posición de frente, es un paso normal de caminar.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Cubi Sogui',
        description: 'Posición larga de frente, es un paso y medio, pierna de atrás recta y pierna delantera flexionada.',
      },
      {
        section: 'Posiciones',
        name: 'Di Cubi Sogui',
        description: 'Posición de lado, formando un ángulo de 90 grados y ambas piernas flexionadas.',
      },
    ]
  },
  {
    id_bell: 2,
    fundamentos: [
      {
        section: 'Defensas',
        name: 'Maki = Defensa',
      },
      {
        section: 'Defensas',
        name: 'Are Maki',
        description: 'Defensa abajo.',
      },
      {
        section: 'Defensas',
        name: 'Montong An Maki',
        description: 'Defensa al medio, brazo contrario al pie adelantado..',
      },
      {
        section: 'Defensas',
        name: 'Montong Maki',
        description: 'Defensa al medio, brazo igual al pie adelantado.',
      },
      {
        section: 'Defensas',
        name: 'Olgul Maki',
        description: 'Defensa arriba.',
      },
      {
        section: 'Golpes',
        name: 'Chirigui = Golpe',
      },
      {
        section: 'Golpes',
        name: 'Montong Bande Chirigui',
        description: 'Golpe de frente al medio, coincidiendo con el pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Montong Baro Chirigui',
        description: 'Golpe de frente al medio, contrario al pie adelantado.',
      },
      {
        section: 'Golpes',
        name: 'Olgul Bande Chirigui',
        description: 'Golpe de frente a la cara, coincidiendo con el pie adelantado.',
      },
      {
        section: 'Posiciones',
        name: 'Sogui = Posición',
      },
      {
        section: 'Posiciones',
        name: 'Moa Sogui',
        description: 'Posición de pies juntos.',
      },
      {
        section: 'Posiciones',
        name: 'Naranji Sogui',
        description: 'Posición de frente, pies abiertos al ancho de los hombros.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Sogui',
        description: 'Posición de frente, es un paso normal de caminar.',
      },
      {
        section: 'Posiciones',
        name: 'Ap Cubi Sogui',
        description: 'Posición larga de frente, es un paso y medio, pierna de atrás recta y pierna delantera flexionada.',
      },
      {
        section: 'Patadas',
        name: 'Chagui = Patada',
      },
      {
        section: 'Patadas',
        name: 'Ap Chagui',
        description: 'Patada al frente con la bola del pie.',
      },
      {
        section: 'Patadas',
        name: 'Bandal Chagui',
        description: 'Patada al frente con la bola del pie.',
      },
      {
        section: 'Patadas',
        name: 'Tolio Chagui',
        description: 'Patada a la cabeza.',
      },
      {
        section: 'Patadas',
        name: 'Miro Chagui',
        description: 'Patada de empuje con la planta del pie.',
      },
    ]
  }
];

export const fundamentosPracticos = [
  {
    id_bell: 5,
    fundamentos: [
      {
        name: 'Bom Sogui Batangson Montong An Maki',
        description: '',
      },
      {
        name: 'Di Cubi Sogui Sonnal Are Maki',
        description: '',
      },
      {
        name: 'Ap Cubi Sogui Gawi Maki',
        description: '',
      },
      {
        name: 'Ap Cubi Sogui Montong Gecho Maki',
        description: '',
      },
      {
        name: 'Ap Cubi Sogui Are Okgoro Maki',
        description: '',
      },
      {
        name: 'Di Cubi Sogui Goduro Montong Bakat Maki',
        description: '',
      },
      {
        name: 'Ap Cubi Sogui Oe Santul Maki',
        description: '',
      },
      {
        name: 'Di Cubi Sogui Goduro Are Maki',
        description: '',
      },
      {
        name: 'Di Koa Sogui Du Chumok Checho Chirigui',
        description: '',
      },
      {
        name: 'Ap Sogui Dung Chumok Olgul Bakat Chigui',
        description: '',
      },
      {
        name: 'Chuchum Sogui Iop Chirigui',
        description: '',
      },
      {
        name: 'Ap Cubi Sogui Dankiok Tuok Chigui',
        description: '.',
      },
      {
        name: 'Ap Chagui',
        description: '',
      },
      {
        name: 'Dui Chagui',
        description: '.',
      },
      {
        name: 'Iop Chagui',
        description: '.',
      },
      {
        name: 'Tolio Chagui',
        description: '',
      },
      {
        name: 'Nerio Chagui',
        description: '',
      },
      {
        name: 'Montolio Chagui',
        description: '',
      },
    ]
  },
  {
    id_bell: 4,
    fundamentos: [
      {
        name: 'DI CUBI SOGUI SONNAL MONTONG MAKI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI JAN SONNAL OLGUL BITURO MAKI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI OLGUL BAKAT MAKI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI BATANGSON MONTONG MAKI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI DUNG CHUMOK AP CHIGUI',
        description: '',
      },
      {
        name: 'UEN - ORUN SOGUI ME CHUMOK NERIO CHIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI PALKUP TOLIO CHIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI PALKUP PIOCHOCK CHIGUI',
        description: '',
      },
      {
        name: 'AP CHAGUI',
        description: '',
      },
      {
        name: 'IOP CHAGUI',
        description: '',
      },
      {
        name: 'TOLIO CHAGUI',
        description: '',
      },
    ]
  },
  {
    id_bell: 3,
    fundamentos: [
      {
        name: 'AP SOGUI MONTONG AN MAKI',
        description: '',
      },
      {
        name: 'DI CUBI SOGUI JAN SONNAL MONTONG BAKAT MAKI',
        description: '',
      },
      {
        name: 'DI CUBI SOGUI SONNAL MONTONG MAKI',
        description: '',
      },
      {
        name: 'DI CUBI SOGUI MONTONG BAKAT MAKI',
        description: '',
      },
      {
        name: 'AP SOGUI JAN SONNAL MOK CHIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI NULO MAKI PION SONKUT SEWO CHIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI CHEBIPUM MOK CHIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI DUNG CHUMOK APE CHIGUI',
        description: '',
      },
      {
        name: 'AP CHAGUI',
        description: '',
      },
      {
        name: 'IOP CHAGUI',
        description: '',
      },
    ]
  },
  {
    id_bell: 2,
    fundamentos: [
      {
        name: 'AP SOGUI ARE MAKI',
        description: '',
      },
      {
        name: 'AP SOGUI MONTONG AN MAKI',
        description: '',
      },
      {
        name: 'AP SOGUI MONTONG MAKI',
        description: '',
      },
      {
        name: 'AP SOGUI OLGUL MAKI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI MONTONG BANDE CHIRIGUI',
        description: '',
      },
      {
        name: 'AP SOGUI MONTONG BARO CHIRIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI OLGUL BANDE CHIRIGUI',
        description: '',
      },
      {
        name: 'AP CUBI SOGUI MONTONG DUBON CHIRIGUI',
        description: '',
      },
    ]
  }
];



export const taeguks = [
  {
    title: 'Taeguk il Chang',
    description: 'Cielo y Luz (18 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/bP_5GYMC0GQ?si=u6XZx5kjpJwQepmv'
  },
  {
    title: 'Taeguk i Chang',
    description: 'Júbilo y Alegría (18 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/hAjxTL4p2mQ?si=m_V6gK9Fz3Bbd7sh'
  },
  {
    title: 'Taeguk Sam Chang',
    description: 'Fuego y Sol (20 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/AZOUybZRQhs?si=yuqHe_uybRP5fkbu'
  },
  {
    title: 'Taeguk Sa Chang',
    description: 'El trueno (20 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/k2bCmkfA0CQ?si=7m_4xcoAPjQOiPaY'
  },
  {
    title: 'Taeguk O Chang',
    description: 'El viento (20 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/Ua7sjvk8OBs?si=9wfQKgRW0IcvtAGM'
  },
  {
    title: 'Taeguk Yuk Chang',
    description: 'El agua (20 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/nxgqnhhK2P0?si=Ou4CJz46G_lHuPa_'
  },
  {
    title: 'Taeguk Chil Chang',
    description: 'Parada en la cima (25 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/irxYm7HonI8?si=C8iD4TkDpxmV4KCS'
  },
  {
    title: 'Taeguk Pal Chang',
    description: 'La tierra (27 movimientos)',
    videoUrl: 'https://www.youtube.com/embed/hh3QEjfj8WA?si=Be0LKHD1kNjdaY5T'
  }
];

export const prohibitedActions = [
  {
    name: 'Acciones Prohibidas GAMCHON',
    id_category: 13,
    actions: [
      'Evadir al oponente dando la espalda o agachándose',
      'Caer al piso intencionalmente',
      'Evitar el combate',
      'Agarrar, retener o empujar al oponente',
      'Atacar por debajo de la cintura',
      'Fingir lesión',
      'Cabezazo o ataque con la rodilla',
      'Golpear la cara del oponente con la mano',
      'Cruzar la línea límite',
      'Mostrar mala conducta por parte del competidor o coach',
      'Levantar la rodilla para evitar un ataque',
      'Pasividad de parte de los competidores durante el combate',
      'Atacar al oponente después de kalyo',
      'Atacar al oponente caído',
      'Derribar al oponente, sujetándolo o empujándolo',
      'Golpear la cara del oponente con la mano',
      'Atacar con intención por debajo de la cintura',
      'Interrumpir el combate por parte del competidor o coach',
      'Comportamientos violentos del competidor o coach',
      'Evitar intencionalmente el combate',
      'Manipular el sistema PSS antes de cada round'
    ]
  }
];

export const IntroduccionTaekwondo =
{
  id_category: 1,
  name: 'Introducción al Taekwondo',
  id_bell: 0,
  text: `
  El Taekwondo es un arte marcial originario de Corea practicado durante miles de años. 
  En este arte, se emplean técnicas de defensa y ataque, convirtiéndolo en uno de los estilos de defensa personal más efectivos en el mundo.

  Utiliza la fuerza, velocidad, coordinación, potencia, precisión y la resistencia cardiovascular y muscular. Más que un deporte, el Taekwondo es una disciplina que ayuda a formar el carácter, brinda seguridad en uno mismo y enseña a convivir con otras personas. 
  Además, permite liberar tensiones y agresividad, promoviendo un estado de relajación que beneficia al practicante en su vida cotidiana, estudios y relaciones interpersonales.
  El Taekwondo busca la plenitud total del individuo, fomentando un cuerpo sano en armonía con un espíritu limpio y generoso.

  Se trata de un deporte que ofrece una mejora significativa en la condición física de sus practicantes debido a la intensidad de los entrenamientos.
  Aunque el Taekwondo proporciona al practicante la habilidad de herir a un adversario, este no es el objetivo buscado. 
  En cambio, se busca la paz y la convivencia armoniosa con los demás. Como dice el lema: "Aprender a pelear para no pelear".
  `
};


export const numeros = {
  id_category: 10,
  name: 'Números en coreano',
  id_bell: 0,
  numeros: [
    {
      spa: 'Uno',
      kor: 'Hana'
    },
    {
      spa: 'Dos',
      kor: 'Dul'
    },
    {
      spa: 'Tres',
      kor: 'Set'
    },
    {
      spa: 'Cuatro',
      kor: 'Net'
    },
    {
      spa: 'Cinco',
      kor: 'Dasot'
    },
    {
      spa: 'Seis',
      kor: 'Iosot'
    },
    {
      spa: 'Siete',
      kor: 'Ilkop'
    },
    {
      spa: 'Ocho',
      kor: 'Iodol'
    },
    {
      spa: 'Nueve',
      kor: 'Ajop'
    },
    {
      spa: 'Diez',
      kor: 'Iol'
    },
    {
      spa: 'Veinte',
      kor: 'Sumul'
    },
    {
      spa: 'Treinta',
      kor: 'Sorum'
    },
    {
      spa: 'Cuarenta',
      kor: 'Majum'
    },
    {
      spa: 'Cincuenta',
      kor: 'Shun'
    },
    {
      spa: 'Sesenta',
      kor: 'Ieshum'
    },
    {
      spa: 'Setenta',
      kor: 'Irum'
    },
    {
      spa: 'Ochenta',
      kor: 'Iodum'
    },
    {
      spa: 'Noventa',
      kor: 'Ajum'
    },
    {
      spa: 'Cien',
      kor: 'Bek'
    }
  ]
}


export const bodyParts = {
  id_category: 9,
  name: 'Partes del cuerpo',
  id_bell: 0,
  bodyParts: [
    {
      spa: 'Cuerpo',
      kor: 'Mom'
    },
    {
      spa: 'Cabeza',
      kor: 'Muori'
    },
    {
      spa: 'Frente',
      kor: 'Ima'
    },
    {
      spa: 'Ojos',
      kor: 'Num'
    },
    {
      spa: 'Nariz',
      kor: 'Ko'
    },
    {
      spa: 'Oreja',
      kor: 'Kwi'
    },
    {
      spa: 'Dientes',
      kor: 'I'
    },
    {
      spa: 'Boca',
      kor: 'Ip'
    },
    {
      spa: 'Labios',
      kor: 'Ipsul'
    },
    {
      spa: 'Barbilla',
      kor: 'Tuok'
    },
    {
      spa: 'Cuello',
      kor: 'Mok'
    },
    {
      spa: 'Hombro',
      kor: 'Oke'
    },
    {
      spa: 'Pecho',
      kor: 'Gasum'
    },
    {
      spa: 'Brazo',
      kor: 'Pal'
    },
    {
      spa: 'Codo',
      kor: 'Palkup'
    },
    {
      spa: 'Antebrazo',
      kor: 'Palmok'
    },
    {
      spa: 'Mano',
      kor: 'Son'
    },
    {
      spa: 'Muñeca',
      kor: 'Sonmok'
    },
    {
      spa: 'Canto de la mano',
      kor: 'Sonnal'
    },
    {
      spa: 'Dedos de la mano',
      kor: 'Sonkarat'
    },
    {
      spa: 'Puño',
      kor: 'Chumok'
    },
    {
      spa: 'Estomago',
      kor: 'Be'
    },
    {
      spa: 'Costillas',
      kor: 'Galbi'
    },
    {
      spa: 'Espalda',
      kor: 'Dung'
    },
    {
      spa: 'Glúteos',
      kor: 'Ondungui'
    },
    {
      spa: 'Pierna',
      kor: 'Dari'
    },
    {
      spa: 'Muslo',
      kor: 'Jiobiokchi'
    },
    {
      spa: 'Rodilla',
      kor: 'Murup'
    },
    {
      spa: 'Espinilla',
      kor: 'Jeonggangyi'
    },
    {
      spa: 'Pie',
      kor: 'Bal'
    },
    {
      spa: 'Tobillo',
      kor: 'Balmok'
    },
    {
      spa: 'Canto del pie',
      kor: 'Balnal'
    },
    {
      spa: 'Empeine',
      kor: 'Baldung'
    },
    {
      spa: 'Dedos del pie',
      kor: 'Balkarat'
    },
    {
      spa: 'Bola del pie',
      kor: 'Apchuk'
    },
    {
      spa: 'Talón del pie',
      kor: 'Dikumchi'
    }
  ]
};

export const generalVocabulary = {
  id_category: 8,
  name: 'Vocabulario General',
  id_bell: 0,
  vocabulary: [
    {
      spa: 'Sabonim',
      kor: 'Profesor'
    },
    {
      spa: 'Uniforme',
      kor: 'Dobok'
    },
    {
      spa: 'Cinta',
      kor: 'Ti'
    },
    {
      spa: 'Salón de clases o Area de combate',
      kor: 'Dochang'
    },
    {
      spa: 'Bandera',
      kor: 'Kukki'
    },
    {
      spa: 'Firmes',
      kor: 'Chariot'
    },
    {
      spa: 'Saludo',
      kor: 'Kiune'
    },
    {
      spa: 'Preparados',
      kor: 'Chumbi'
    },
    { spa: 'Grito', kor: 'Kiap' },
    { spa: 'Empezar', kor: 'Sichak' },
    { spa: 'Terminar', kor: 'Barot' },
    { spa: 'Detenerse o Separarse', kor: 'Kalyo' },
    { spa: 'Continuar', kor: 'Kesok' },
    { spa: 'Alto, No más', kor: 'Kuman' },
    { spa: 'Azul', kor: 'Chong' },
    { spa: 'Rojo', kor: 'Jong' },
    { spa: 'Ganador', kor: 'Sun' },
    { spa: 'Empate', kor: 'Bijing' },
    { spa: 'Amonestación (Medio punto)', kor: 'Kyongo' },
    { spa: 'Deducción (Un punto)', kor: 'Gamchon' },
    { spa: 'Defensa', kor: 'Maki' },
    { spa: 'Golpe', kor: 'Chirigui' },
    { spa: 'Posición', kor: 'Sogui' },
    { spa: 'Patada', kor: 'Chagui' },
    { spa: 'Al frente', kor: 'Ap' },
    { spa: 'De lado', kor: 'Iop' },
    { spa: 'Hacia atrás', kor: 'Dui' },
    { spa: 'Igual', kor: 'Bande' },
    { spa: 'Contrario', kor: 'Baro' },
    { spa: 'Izquierdo', kor: 'Uen' },
    { spa: 'Derecho', kor: 'Orum' },
    { spa: 'Sentarse', kor: 'Anyio' },
    { spa: 'Levantarse', kor: 'Kirits' },
    { spa: 'Avanzar', kor: 'Ap Fro' },
    { spa: 'Retroceder', kor: 'Di Fro' },
    { spa: 'Volverse', kor: 'Tirodorat' },
    { spa: 'Saludo al profesor', kor: 'Sabomin Kie Kiune' },
    { spa: 'Saludo a las banderas', kor: 'Kukki Dejadio Kiune' },
    { spa: 'Muchas gracias', kor: 'Kansa Jamnida' }
  ]
};

export const aspectsToImproveForms = {
  id_category: 7,
  name: 'Aspectos para Mejorar las Formas',
  id_bell: 0,
  aspects : [
    'Foco',
    'Respeto de posiciones',
    'Precisión',
    'Balance (Equilibrio)',
    'Conocer bien la secuencia',
    'Concentración',
    'Potencia',
    'Respiración',
    'Velocidad',
    'Tiempos',
    'Terminar en el punto donde se empezó',
    'Coordinación',
    'Buena postura'
  ]
};


export const cinturonesValoresTaekwondo = [
  { name: 'TAE: Saltar, patear, majar' , description: 'sig'},
  { name: 'KWON: Golpe con la mano' , description: 'sig'},
  { name: 'DO: Camino, vocación o forma de arte marcial' , description: 'sig'},
  { name: 'Cinturón Blanco (Bek-ti)', description: 'Representa la pureza y marca el comienzo del viaje en el Taekwondo.' },
  { name: 'Cinturón Amarillo (Kwang-ti)', description: 'Simboliza el amanecer, el crecimiento y el desarrollo.' },
  { name: 'Cinturón Verde (Rok-ti)', description: 'Representa la primavera, el progreso y el florecimiento.' },
  { name: 'Cinturón Azul (Chong-ti)', description: 'Simboliza la fluidez del agua y la adaptabilidad en el Taekwondo.' },
  { name: 'Cinturón Rojo (Jong-ti)', description: 'Representa el fuego y la pasión por el arte marcial.' },
  { name: 'Cinturón Negro (Juk-ti)', description: 'El cinturón negro simboliza el honor y la maestría en el Taekwondo.' },
  { name: 'Honor', description : 'valor'},
  { name: 'Autocontrol', description : 'valor'},
  { name: 'Cortesía', description : 'valor'},
  { name: 'Coraje', description : 'valor'},
  { name: 'Paciencia', description : 'valor'},
  { name: 'Modestia', description : 'valor'}
];


export const AcademiaFenix =
{
  id_category: 4,
  name: 'Academia Fenix',
  id_bell: 0,
  text: `
    Taekwondo Fénix surge del compromiso de un grupo de entrenadores liderados por el profesor y fundador Luis Lobo Rojas, con el objetivo de llevar el taekwondo y sus estudiantes a otro nivel deportivo y marcial. Se enfocan en potenciar las habilidades de cada estudiante y consolidar estrategias, promoviendo el trabajo duro y el esfuerzo continuo.

    El nombre de Taekwondo Fénix se inspira en el ave Fénix, que simboliza la resiliencia. Al igual que el Fénix, que puede sobrevivir a la destrucción y resurgir, en el deporte la resiliencia es una cualidad fundamental. Los atletas enfrentan obstáculos, fracasos y lesiones, pero aquellos que son capaces de levantarse y continuar con determinación son los que logran alcanzar el éxito. Además, en el deporte, los atletas pueden experimentar transformaciones significativas a medida que desarrollan habilidades, mejoran su condición física y superan sus propios límites. Este proceso de entrenamiento y competencia puede moldear a los deportistas en personas más fuertes, disciplinadas y capaces, no solo en el deporte, sino también en la vida. El objetivo es crear seres humanos más integrales.

    Misión
    Nuestra misión es fomentar el desarrollo integral de los y las jóvenes a través de la práctica del taekwondo. Buscamos brindarles una formación sólida en esta disciplina marcial y promover valores positivos como el respeto, la disciplina, la perseverancia y la autoconfianza. Nuestro objetivo es ayudar a nuestros y nuestras estudiantes a alcanzar su máximo potencial físico y mental.

    Visión
    Nuestra visión es convertirnos en una academia de taekwondo de renombre, reconocida por su excelencia en la enseñanza y formación de jóvenes. Aspiramos a ser un referente en la comunidad, donde los y las jóvenes encuentren un espacio seguro y motivador para desarrollar habilidades físicas, fortalecer su carácter y cultivar una mentalidad positiva. Nos esforzamos por formar campeones no solo en el arte marcial, sino también en la vida, guiándolos hacia un camino de autodisciplina, resiliencia y liderazgo.
  `
};
export const NowTaek =
{
  id_category: 3,
  name: 'Taekwondo en tiempos modernos',
  id_bell: 0,
  text: `
    La Federación Mundial de Taekwondo (WTF) es el ente rector del Taekwondo en todo el mundo. Está ubicada en Seúl, Corea, y fue fundada en 1973.

    El Taekwondo fue introducido en Costa Rica por el Profesor Aquiles Wong Kun Yan en 1969.

    La Federación Costarricense de Taekwondo es el ente rector del taekwondo a nivel nacional y es liderada por el presidente Wilmar Alvarado. `
};

export const HonorTaek =
{
  id_category: 2,
  name: 'Filosofía y honor subyacente',
  id_bell: 0,
  text: `
    El Taekwondo es un arte marcial que tiene su origen en Corea, por lo que a lo largo de su historia ha desarrollado una gran tradición filosófica y espiritual.

    El uniforme (dobok) representa tres elementos:

    - La gabacha: representa el cielo.
    - El pantalón: representa la tierra.
    - El cinturón: representa la persona.
    - El anudarse el cinturón (Ti) tiene como significado el orden y la apariencia personal; las dos puntas tienen que estar del mismo tamaño, lo que representa el equilibrio.

    La bandera coreana (Tae Kukki) simboliza la forma de pensar, la filosofía y el misticismo de los coreanos.

    El código de honor del Taekwondo consiste en:

     - Respeto a la nación.
     - Respeto y obediencia a los padres.
     - Honor a los amigos.
     - Justicia y omisión a la violencia innecesaria.
     - El valor.
  `
};



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
    text: 'El Cinturón Amarillo es el inicio del aprendizaje, el nacimiento. El amarillo representa las riquezas físicas y espirituales. Este cinturón representa el amanecer.' 
  },
  { 
    id: 3 , 
    name: 'Verde (Rok-ti)', 
    color: 'green' ,
    img: '~/imgs/green-belt.png',
    text: 'El Cinturón Verde es la consolidación del aprendizaje básico. El verde representa el florecimiento de una nueva vida. Este cinturón representa la primavera' 
  },
  { 
    id: 4 , 
    name: 'Azul (Chong-ti)', 
    color: 'blue' ,
    img: '~/imgs/blue-belt.png',
    text: `El Cinturón Azul es uno de los más importantes 
    ya que se comienza la búsqueda de la esencia. 
    El azul representa el color generado 
    por la unión del cielo y el mar. 
    Este cinturón representa el agua`
  },
  { 
    id: 5 , 
    name: 'Rojo (Jong-ti)', 
    color: 'red' ,
    img: '~/imgs/red-belt.png',
    text: `El Cinturón Rojo es uno de los más difíciles 
    ya que se pone a prueba todo lo aprendido. 
    El rojo representa el esfuerzo realizado a 
    través de los años para llegar a ese nivel. 
    Este cinturón representa el fuego`
  },
  
];

//<StackLayout v-for="(info, index) in section.info" id="" >
// <!-- si es de tipo imagen mostrar imagen -->
// <Image v-if="info.type == 'image'" :src="info.url" stretch="aspectFill" />
// <!-- si es de tipo ul mostrar ul -->
// <StackLayout v-if="info.type == 'ul'" >
//   <Label :text="info.title" class="section-title text-center" margin="10" />
//   <ListView for="(item, index) in info.items" >
//     <v-template>
//       <StackLayout orientation="horizontal" >
//         <Label :text="item.content" class="text-center text-secondary m0" />
//       </StackLayout>
//     </v-template>
//   </ListView>
// </StackLayout>
// <StackLayout v-if="info.type == 'text'" class="m0" >
//   <Label :text="info.title" class="section-title text-center" margin="10" />
//   <ListView for="(item, index) in info.items" class="m0" >
//     <v-template>
//       <Label :text="item.content" class="textInfo text-secondary m0" />
//     </v-template>
//   </ListView>
// </StackLayout>



  
  