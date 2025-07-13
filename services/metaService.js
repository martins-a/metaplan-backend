
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


    }
}

module.exports = metaService;