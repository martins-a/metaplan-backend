const metaService = require("../services/metaService");

const metaController = {
    getAllGoals: async(req, res, next) => {
        try {
           const { page = 1, limit = 10 } = req.query; 
           console.log(req.query);
           const metas = await metaService.getAllMetas(page, limit);
           return res.status(200).json(metas);
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = metaController;