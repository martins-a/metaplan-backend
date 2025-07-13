const express = require('express');
const metaRoutes = require('./routes/metaRoutes');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

// midlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/api/metas', metaRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})