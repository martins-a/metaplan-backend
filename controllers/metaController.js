const metaService = require("../services/metaService");

const metaController = {
    getAllMetas: async(req, res, next) => {
        try {
           const { page = 1, limit = 10 } = req.query; 
           console.log(req.query);
           const metas = await metaService.getAllMetas(page, limit);
           return res.status(200).json(metas);
        } catch(error) {
            return res.status(500).json(error);
        }
    },
    deleteMeta: async (req, res, next) => {
        try {
            const {id} = req.query;
            console.log(req);
            await metaService.deleteMeta(id);
            return res.status(204).json();
        } catch(error) {
            return res.status(500).json(error);
        }
    },
    addMeta: async (req, res, next) => {
        try {
            const {name, description, reserve, objective, completed} = req.body;
            console.log(req.body);
            await metaService.addMeta({name, description, reserve, objective, completed});
            return res.status(201).json();
        } catch(error) {
            return res.status(500).json(error);
        }
    },
    editMeta: async (req, res, next) => {
        try {
            const {id, name, description, reserve, objective, completed} = req.body;
            console.log(req.body);
            await metaService.addMeta({id, name, description, reserve, objective, completed});
            return res.status(201).json();
        } catch(error) {
            return res.status(500).json(error);
        }
    }
}

module.exports = metaController;