import express from 'express'
import airtports from './routes/airports'

const app = express() // Se inicia Express
app.use(express.json()) // Middleware que transforma la req.body a json

const PORT = 3000

app.get('/', (_req, res) => {
    res.send("Hola")
})

// Se inicia la aplicacion
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

app.use('/api/airtport/', airtports)