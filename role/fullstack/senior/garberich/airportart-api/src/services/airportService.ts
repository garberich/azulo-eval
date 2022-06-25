import { Airport } from "../models/airport.model";
import { conector } from "../config/mysql_conector";

export const updateAirportOperator = (idAirport: number, idAirportOperator: number) => {
    const sql = `update Airport SET AirportOperatorId = ${idAirportOperator} Where Id = ${idAirport}`
    conector.query(sql, function(err, result){
        if(err) throw err
        // console.log(result)

        return(result)
    })
}

export const findById = async(id: number): Promise<Airport | undefined> => {
    const airport: Airport = {
        Id: 0,
        Name: '',
        AirportOperatorId: 0,
        AirportCode: '',
        LocationId: 0,
        PriorityOrder: 0,
    }
    const sql = `Select * from Airport where Id = ${id}`
    return new Promise((resolve, reject) => {
        conector.query(sql, function (err, result) {
            if (err) reject(err); 
            
            if(result.length) {
                airport.Id = result[0].Id
                airport.Name = result[0].Name
                airport.AirportOperatorId = result[0].AirportOperatorId
                airport.AirportCode = result[0].AirportCode
                airport.LocationId = result[0].LocationId
                airport.PriorityOrder = Number(result[0].PriorityOrder)
                // console.log(airport)
                resolve (airport)
            }
            else resolve (undefined)
        })
    })
}

export const getIdAirportByOrder = async(id: number): Promise<number | undefined> => {
    const sql = `select Id from Airport where PriorityOrder = ${id}`
    return new Promise((resolve, reject) => {
        conector.query(sql, function (err, result){
            if(err) reject(err);

            if(result.length){
                let resultId = Number(JSON.stringify(result[0].Id))
                resolve(resultId)
            }
            else resolve(undefined)
        })
    })
}

export const getOrderById = async(id: number): Promise<number | undefined> => {
    const sql = `select PriorityOrder from Airport where Id = ${id}`
    return new Promise((resolve, reject) => {
        conector.query(sql, function (err, result){
            if(err) reject(err);

            if(result.length){
                let resultOrder = Number(JSON.stringify(result[0].PriorityOrder))
                resolve(resultOrder)
            }
            else resolve(undefined)
        })
    })
}

export const updateOrder = (idAirport: number, priority: number) => {
    const sql = `update Airport SET PriorityOrder = ${priority} Where Id = ${idAirport}`
    conector.query(sql, function(err, result){
        if(err) throw err
        // console.log(result)

        return(result)
    })
}