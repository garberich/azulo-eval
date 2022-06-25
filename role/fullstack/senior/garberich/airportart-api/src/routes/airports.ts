import express from 'express'
import * as airportOperatorService from '../services/airportOperatorService'
import * as airportService from '../services/airportService'

const router = express.Router()

router.get('/:id', async (req, res) => {
    const airport = await airportService.findById(Number(req.params.id))
    return (airport != null) ? res.send(airport) : res.status(404).send("Aeropuerto no existe")
})

router.post('/move/:idairport/:idoperator', async (req, res) => {
    const airportOperator = await airportOperatorService.findById(Number(req.params.idoperator))
    const airport = await airportService.findById(Number(req.params.idairport))

    if(airportOperator == null) return res.status(404).send("Operador no existe")
    if(airport == null) return res.status(404).send("Aeropuerto no existe")

    try {
        airportService.updateAirportOperator(Number(req.params.idairport), Number(req.params.idoperator))
        return res.status(200).send("Registro actualizado")
    } catch (e:any) {
        return res.status(404).send(e.message)
    }
})

export default router