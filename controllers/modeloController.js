import Livro from '../models/modelo.js'

const livroController = {
    async createLivros(req, res) {
        const { nome, autor } = req.body;
        try {
            const livro = await Livro.create({ nome, autor });
            res.status(201).json(livro);
        } catch (err) {
            console.error("Erro ao criar um registro de um livro", err);
            res.status(500).json({ error: 'Erro ao criar um registro de um livro' });
        }
    },


    async getLivros(req,res) {
        try {
            const livros = await Livro.findAll();
            res.json(livros);
        } catch (err) {
            console.error("Erro ao buscar a Lista de Livros", err);
            res.status(500).json({ error: 'Error ao buscar a lista de livros' });
        }
    },

    async getlivrosporId(req, res) {
        const id = req.params.id;

        try {
            const livro = await Livro.findByPk(id);
            if (!livro) {
                res.status(404).json({ mensagem: 'Livro Não encontrado' });
            } else {
                res.json(livro);
            }

        } catch (err) {
            console.error("Livro não encontrado:", err);
            res.status(500).json({ error: 'Livro não encontrado' });
        }
    },
    async updateLivro(req,res){
          const id = req.params.id;
          const {nome,autor} = req.body;

          try{
              const livro = await Livro.findByPk(id);
              if(!livro){
                 res.status(404).json({mensagem:'Livro Não Encontrado'})
              }else{
                 await livro.update({nome,autor});
                 res.json({mensagem:'Livro Atualizado com Sucesso'});
              }
          }catch(err){
                 console.error("Erro ao Atualizar o Livro",err);
                 res.status(500).json({error:'Erro ao Atualizar o Livro'});
          }
    },
    async deleteLivro(req,res){
          const id = req.params.id;

          try{
             const livro = await Livro.findByPk(id);
             if(!livro){
                res.status(404).json({mensagem:"Livro Não encontrado"});
             }else{
                await livro.destroy();
                res.json({mensagem:"Livro Excluído com Sucesso"});
             }
          }catch(err){
                 console.error("Erro ao excluir o Livro:",err);
                 res.status(500).json({error:"Erro ao excluir o Livro"});
          }
    }
}
export default livroController;