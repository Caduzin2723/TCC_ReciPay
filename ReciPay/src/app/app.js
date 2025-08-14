// servidor
// PRECISO TRANSFORMAR EM TSX DEPOIS E VER ONDE COLOCO
 
const express = require('express');
const { connectDB, sequelize } = require('src/backend/config/database');
const authRoutes = require('src/backend/routes/auth.routes');
const User = require('src/backend/models/user.model');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api', authRoutes)

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    await sequelize.sync();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`)
    });
};

startServer();