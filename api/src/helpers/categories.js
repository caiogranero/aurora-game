const categories = [
  {
    name: 'Uns',
    description: 'Haver pelo menos 1 dado com valor "um" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "um"',
    _id: 1
  },
  {
    name: 'Dois',
    description: 'Haver pelo menos 1 dado com valor "dois" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "dois"',
    _id: 2
  },
  {
    name: 'Três',
    description: 'Haver pelo menos 1 dado com valor "três" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "três"',
    _id: 3
  },
  {
    name: 'Quatros',
    description: 'Haver pelo menos 1 dado com valor "quatro" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "quatro"',
    _id: 4
  },
  {
    name: 'Cincos',
    description: 'Haver pelo menos 1 dado com valor "cinco" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "cinco"',
    _id: 5
  },
  {
    name: 'Seis',
    description: 'Haver pelo menos 1 dado com valor "seis" no rolamento',
    rule: 'Pontue a soma de todos os dados de valor "seis"',
    _id: 6
  },
  {
    name: 'Par',
    description: 'Haver pelo menos 2 dados de mesmo valor no rolamento',
    rule: 'Pontue a soma dos dois dados de mesmo valor',
    _id: 7
  },
  {
    name: 'Dois Pares',
    description: 'Haver pelo menos 2 pares de dados distintos no rolamento',
    rule: 'Pontue a soma dos quatro dados que integram os pares',
    _id: 8
  },
  {
    name: 'Trio',
    description: 'Haver pelo menos 3 dados de mesmo valor no rolamento',
    rule: 'Pontue a soma dos três dados de mesmo valor',
    _id: 9
  },
  {
    name: 'Quadra',
    description: 'Haver pelo menos 4 dados de mesmo valor no rolamento',
    rule: 'Pontue a soma dos quatro dados de mesmo valor',
    _id: 10
  },
  {
    name: 'Sequencia Menor',
    description: 'Haver pelo menos 4 dados em ordem numérica no rolamento',
    rule: 'Pontue 15 pontos',
    _id: 11
  },
  {
    name: 'Sequencia Maior',
    description: 'Haver os 5 dados em ordem numérica no rolamento',
    rule: 'Pontue 20 pontos',
    _id: 12
  },
  {
    name: 'Full House',
    description: 'Haver 1 par e 1 trio no rolamento',
    rule: 'Pontue a soma de todos os 5 dados',
    _id: 13
  },
  {
    name: 'Aurora',
    description: 'Haver 5 dados de mesmo valor no rolamento',
    rule: 'Pontue 50 pontos',
    _id: 14
  }
]

module.exports = categories
