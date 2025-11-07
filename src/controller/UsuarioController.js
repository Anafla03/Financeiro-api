let usuarios = [];

module.exports = {
  listar(req, res) {
    return res.json(usuarios);
  },

  criar(req, res) {
    const { nome, email } = req.body;

    if (!nome || !email) {
      return res.status(400).json({ erro: 'Nome e e-mail são obrigatórios.' });
    }

    const novoUsuario = { id: usuarios.length + 1, nome, email };
    usuarios.push(novoUsuario);

    return res.status(201).json(novoUsuario);
  },

  deletar(req, res) {
    const { id } = req.params;
    usuarios = usuarios.filter(u => u.id != id);
    return res.json({ mensagem: 'Usuário removido com sucesso!' });
  }
};
