
const metaMocks = require('../mocks/metaMocks');

const metaService = {
    getAllMetas: async (page, limit) => {
       const skip = (page - 1) * limit;

       // mocked TODO: remove mock and implement usage of mongodb
        total = 12;

        return {
            data: metaMocks,
            pagination: {
                current: parseInt(page),
                pages: Math.ceil(total / limit),
                total: total
            }
        }
    },
    deleteMeta: async (id) => {
        return id;
    },
    addMeta: async (meta) => {
        return meta;
    },
    editdMeta: async (meta) => {
        return meta;
    }
}

module.exports = metaService;