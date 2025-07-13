
const materias = [
  { codigo: 'MAT1', nombre: 'Matemática I', correlativas: [], aprobada: false },
  { codigo: 'QUI1', nombre: 'Química I', correlativas: [], aprobada: false },
  { codigo: 'TALL', nombre: 'Taller de orientación', correlativas: [], aprobada: false },
  { codigo: 'MAT2', nombre: 'Matemática II', correlativas: ['MAT1'], aprobada: false },
  { codigo: 'QUI2', nombre: 'Química II', correlativas: ['QUI1'], aprobada: false },
  { codigo: 'FIS1', nombre: 'Física I', correlativas: ['MAT1'], aprobada: false },
  // Continúa...
];
