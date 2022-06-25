import mysql from 'mysql'

export const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'airportart'
})

conector.connect(err => {
    if (err) throw err
    console.log("Connect to BD")
})