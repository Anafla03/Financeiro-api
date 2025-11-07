let categorias = [];

module.exports = {
  listar(req, res) {
    return res.json(categorias);
  },

  criar(req, res) {
    const { descricao } = req.body;

    if (!descricao) {
      return res.status(400).json({ erro: 'Descrição é obrigatória.' });
    }

    const novaCategoria = { id: categorias.length + 1, descricao };
    categorias.push(novaCategoria);

    return res.status(201).json(novaCategoria);
  },

  deletar(req, res) {
    const { id } = req.params;
    categorias = categorias.filter(c => c.id != id);
    return res.json({ mensagem: 'Categoria removida!' });
  }
};
