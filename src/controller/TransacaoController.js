let transacoes = [];

module.exports = {
  listar(req, res) {
    return res.json(transacoes);
  },

  criar(req, res) {
    const { descricao, valor, tipo } = req.body;

    if (!descricao || !valor || !tipo) {
      return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios.' });
    }

    const novaTransacao = { 
      id: transacoes.length + 1, 
      descricao, 
      valor, 
      tipo 
    };

    transacoes.push(novaTransacao);

    return res.status(201).json(novaTransacao);
  },

  deletar(req, res) {
    const { id } = req.params;
    transacoes = transacoes.filter(t => t.id != id);
    return res.json({ mensagem: 'Transação removida!' });
  }
};
