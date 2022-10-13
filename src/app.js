import express from 'express';

const app = express();

app.use(express.json());

const livros = [
  { id: 1, "titulo": 'Senhor dos Aneis' },
  { id: 2, "titulo": 'Harry Potter' }
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
  let index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo

  res.status(200).json(livros)
})

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app