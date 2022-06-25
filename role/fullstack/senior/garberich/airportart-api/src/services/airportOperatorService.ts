import { AirportOperator } from "../models/airport_operator.model";
import { conector } from "../config/mysql_conector";

export const findById = async(id: number): Promise<AirportOperator | undefined> => {
    const airportOperator: AirportOperator = {
        Id: 0,
        Name:''
    }
    const sql = `Select * from AirportOperator where Id = ${id}`
    return new Promise((resolve, reject) =>{
        conector.query(sql, function(err, result){
            if(err) reject(err);

            if(result.length){
                airportOperator.Id = result[0].Id
                airportOperator.Name = result[0].Name

                console.log(airportOperator)
                resolve(airportOperator)
            }
            else resolve(undefined)
        })
    })
}