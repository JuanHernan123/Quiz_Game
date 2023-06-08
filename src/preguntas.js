const preguntas = [
    {
      titulo: "¿Cual es el lenguaje mas usado actualmente?",
      opciones: [
        { textoRespuesta: "Kotlin", isCorrect: false },
        { textoRespuesta: "Python", isCorrect: true },
        { textoRespuesta: "JavaScript", isCorrect: false },
        { textoRespuesta: "C++", isCorrect: false },
      ],
    },
    {
      titulo: "¿Cuánto es `11`+ 1 en JavaScript?",
      opciones: [
        { textoRespuesta: "111", isCorrect: true },
        { textoRespuesta: "12", isCorrect: false },
        { textoRespuesta: "Syntax Error", isCorrect: false },
        { textoRespuesta: "`11`1", isCorrect: false },
      ],
    },
    {
      titulo: "¿En qué año fue creado JavaScript?",
      opciones: [
        { textoRespuesta: "1997", isCorrect: false },
        { textoRespuesta: "2001", isCorrect: false },
        { textoRespuesta: "1987", isCorrect: false },
        { textoRespuesta: "1995", isCorrect: true },
      ],
    },
  ];
  
  export default preguntas;