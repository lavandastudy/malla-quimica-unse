
const materias = [
  // 1° Año
  { codigo: 'MAT1', nombre: 'Matemática I', correlativas: [], aprobada: false },
  { codigo: 'QUI1', nombre: 'Química I', correlativas: [], aprobada: false },
  { codigo: 'TALL', nombre: 'Taller de orientación', correlativas: [], aprobada: false },
  { codigo: 'MAT2', nombre: 'Matemática II', correlativas: ['MAT1'], aprobada: false },
  { codigo: 'QUI2', nombre: 'Química II', correlativas: ['QUI1'], aprobada: false },
  { codigo: 'FIS1', nombre: 'Física I', correlativas: ['MAT1'], aprobada: false },

  // 2° Año
  { codigo: 'QUIN', nombre: 'Química Inorgánica', correlativas: ['QUI1', 'QUI2'], aprobada: false },
  { codigo: 'QO1', nombre: 'Química Orgánica I', correlativas: ['QUI1', 'QUI2'], aprobada: false },
  { codigo: 'FIS2', nombre: 'Física II', correlativas: ['MAT1', 'MAT2', 'FIS1'], aprobada: false },
  { codigo: 'QAN1', nombre: 'Química Analítica I', correlativas: ['QUI2', 'QUIN'], aprobada: false },
  { codigo: 'QO2', nombre: 'Química Orgánica II', correlativas: ['QUI2', 'QO1'], aprobada: false },
  { codigo: 'BIO', nombre: 'Biología', correlativas: ['QUI2', 'QO1'], aprobada: false },

  // 3° Año
  { codigo: 'FQ1', nombre: 'Fisicoquímica I', correlativas: ['QUI2', 'FIS1', 'FIS2'], aprobada: false },
  { codigo: 'QB', nombre: 'Química Biológica', correlativas: ['QO1', 'QO2', 'BIO'], aprobada: false },
  { codigo: 'EST', nombre: 'Estadística', correlativas: ['MAT2'], aprobada: false },
  { codigo: 'FQ2', nombre: 'Fisicoquímica II', correlativas: ['FQ1', 'QO2', 'QUIN'], aprobada: false },
  { codigo: 'MIC', nombre: 'Microbiología General', correlativas: ['QB', 'BIO'], aprobada: false },
  { codigo: 'QAN2', nombre: 'Química Analítica II', correlativas: ['QAN1', 'EST', 'FQ1'], aprobada: false },

  // 4° Año
  { codigo: 'BRO', nombre: 'Bromatología', correlativas: ['QAN2', 'QO2', 'QB'], aprobada: false },
  { codigo: 'AINST', nombre: 'Análisis Instrumental', correlativas: ['QAN2', 'FQ2'], aprobada: false },
  { codigo: 'QO3', nombre: 'Química Orgánica III', correlativas: ['QAN2', 'QO2'], aprobada: false },
  { codigo: 'QI', nombre: 'Química Industrial', correlativas: ['BRO', 'AINST', 'FQ2'], aprobada: false },
  { codigo: 'QA', nombre: 'Química Ambiental', correlativas: ['AINST', 'QAN2'], aprobada: false },
  { codigo: 'TOX', nombre: 'Toxicología', correlativas: ['BRO', 'AINST', 'MIC'], aprobada: false },

  // 5° Año
  { codigo: 'FQ3', nombre: 'Fisicoquímica III', correlativas: ['FQ2', 'FQ1'], aprobada: false },
  { codigo: 'QUIMET', nombre: 'Quimiometría', correlativas: ['AINST', 'EST', 'QAN2'], aprobada: false },
  { codigo: 'TFyEP', nombre: 'TFyEP', correlativas: [], aprobada: false },  // 3° año
  { codigo: 'LHSL', nombre: 'LHySL', correlativas: [], aprobada: false },   // 3° año
  { codigo: 'SIM', nombre: 'Simulación y Modelado Molecular', correlativas: ['FQ1', 'FQ2'], aprobada: false },
  { codigo: 'ING1', nombre: 'Inglés I', correlativas: [], aprobada: false },
  { codigo: 'ING2', nombre: 'Inglés II', correlativas: [], aprobada: false },
  { codigo: 'ELECT', nombre: 'Electivas', correlativas: [], aprobada: false },
  { codigo: 'TFINAL', nombre: 'Trabajo Final', correlativas: [], aprobada: false }
];
