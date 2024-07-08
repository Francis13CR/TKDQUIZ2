
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







export const info = [
  
  {
    id_category: 10,
    name: 'Números en coreano',
    id_bell: 0,
    text: `
    <style>
      ${cssContent}
    </style>
    <body>
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
        <li>MAJUM = Cuarenta</li>
        <li>SHUN = Cincuenta</li>
        <li>IESHUM = Sesenta</li>
        <li>IRUM = Setenta</li>
        <li>IODUM = Ochenta</li>
        <li>AjUm = Noventa</li>
        <li>BEK = Cien</li>
      </ul>
    </body>
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
    name: 'Significados',
    id_category: 5,
    id_bell: 0,
    videos: [],
    text: `
    <style>
     ${cssContent}
    </style>
    <div>
    <h3>Significado del Taekwondo</h3>
    <p><strong>TAE:</strong> Saltar, patear, majar</p>
    <p><strong>KWON:</strong> Golpe con la mano</p>
    <p><strong>DO:</strong> Camino, vocación o forma de arte marcial</p>
    </div>
    <div>
    <h3 >Valores del Taekwondo</h3>
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
    <h3>Nombres y Significados de los Cinturones</h3>
    <ul>
        <li>
            <strong>Cinturón Blanco (Bek-ti)</strong>: Representa la pureza y marca el comienzo del viaje en el Taekwondo.
        </li>
        <li>
            <strong style="color:yellow;"   >Cinturón Amarillo (Kwang-ti)</strong>: Simboliza el amanecer, el crecimiento y el desarrollo.
        </li>
        <li>
            <strong style="color:green;">Cinturón Verde (Rok-ti)</strong>: Representa la primavera, el progreso y el florecimiento.
        </li>
        <li>
            <strong style="color: rgb(0, 0, 255)!important;">Cinturón Azul (Chong-ti)</strong>: Simboliza la fluidez del agua y la adaptabilidad en el Taekwondo.
        </li>
        <li>
            <strong style="color:red;">Cinturón Rojo (Jong-ti)</strong>: Representa el fuego y la pasión por el arte marcial.
        </li>
        <li>
            <strong class="outlined-text">Cinturón Negro (Juk-ti)</strong>: El cinturón negro simboliza el honor y la maestría en el Taekwondo.
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
    <h3 class="text-center">Misión</h3>
    <p>
        Nuestra misión es fomentar el desarrollo integral de los y las jóvenes a través de la práctica del taekwondo. Buscamos brindarles una formación sólida en esta disciplina marcial y promover valores positivos como el respeto, la disciplina, la perseverancia y la autoconfianza. Nuestro objetivo es ayudar a nuestros y nuestras estudiantes a alcanzar su máximo potencial físico y mental.
    </p>

    <h3 class="text-center">Visión</h3>
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
    <div>
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
    </div>
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



  
  