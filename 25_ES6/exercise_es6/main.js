const alunos = [
  { nome: 'João', nota: 7.3},
  { nome: 'Jefferson', nota: 4.8},
  { nome: 'Maria', nota: 9.2},
  { nome: 'Pedro', nota: 9.8},
  { nome: 'Lucas', nota: 3.8},
  { nome: 'Joana', nota: 10},
  { nome: 'Brenda', nota: 9},
  { nome: 'Antonio', nota: 2},
  { nome: 'Arthur', nota: 8.2},
  { nome: 'Caren', nota: 7.8},
  { nome: 'Jonathan', nota: 6.8},
  { nome: 'Carla', nota: 9.1},
  { nome: 'Julia', nota: 5.9},
  { nome: 'Marco', nota: 6.8},
  { nome: 'Fernando', nota: 3.8},
  { nome: 'Fernanda', nota: 5.7},
  { nome: 'Ana', nota: 8.7},
  { nome: 'Ketlin', nota: 5.7}
]


function notasAcimaDaMedia(arr) {
  aprovados = [];
  arr.map(aluno => aluno.nota >= 6 ? aprovados.push(aluno) : 'Reprovado');
  return aprovados
}

console.log(notasAcimaDaMedia(alunos));