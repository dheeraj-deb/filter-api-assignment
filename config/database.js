const MongoClient = require('mongodb').MongoClient
const obj = {}

module.exports = connect_db = (callback) => {
    MongoClient.connect(process.env.MONGODB_URI, (err, client) => {
        if (err) callback(err)
        obj.db = client.db('assignment')
        callback("db connected")
    })
}

module.exports = db = () => {
    return obj.db
}

