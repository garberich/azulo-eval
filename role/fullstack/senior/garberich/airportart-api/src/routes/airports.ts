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

router.post('/change_order', async(req, res) => {
    try {
        for (let i = 0; i < req.body.length; i++) {
            const airportId = req.body[i].airportId
            const priorityOrder = req.body[i].priorityOrder
    
            // Obtenemos el aeropuerto que tiene actualmente el orden a asignar
            const actualAirportId = await airportService.getIdAirportByOrder(priorityOrder)
            if(actualAirportId == null) throw new Error(`No se encuentra un aeropuerto con la prioridad ${priorityOrder}`)
            
            // Obtenemos el orden que tiene actualmente el aeropuerto a actualizar
            const actualOrder = await airportService.getOrderById(airportId) 
            if(actualOrder == null) throw new Error(`No se encuentra una prioridad para el aeropuerto ${airportId}`)
            
            airportService.updateOrder(Number(airportId), Number(priorityOrder))
            airportService.updateOrder(Number(actualAirportId), Number(actualOrder)) 
        }

        return res.status(200).send("Prioridad actualizada")
        
    } catch (e: any) {
        return res.status(404).send(e.message)
    }
    
})

export default router