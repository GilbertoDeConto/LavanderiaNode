const dao = require('./dao')

module.exports = (app) => {
    app.route("/salvar").post((req, resp) => {
        console.log(req.body);
        dao.salvar(req.body, () => {
            resp.end();
        });
        
    });
    app.route("/listar").get ((req, resp) => {

        dao.listar((retorno) =>{
            resp.json(retorno);
        })
    });
    app.route("/atualizar").post ((req, resp) => {
        dao.atualizar(req.body, () => {
            resp.end();
        })
    });
    app.route("/excluir").get((req, resp) => {
        let id = req.query.id;
        dao.excluir(id, () =>{
            resp.end();
        })
    });
}
