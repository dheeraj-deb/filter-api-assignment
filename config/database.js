const MongoClient = require('mongodb').MongoClient
const obj = {}

const connect_db = (callback) => {
    MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
        if (err) callback(err)
        obj.db = client.db('assignment')
        callback("db connected")
    })
}

const db = () => {
    return obj.db
}

module.exports = {
    connect_db,
    db
}