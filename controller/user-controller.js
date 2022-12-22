const mongodb = require('mongodb')
const { db } = require('../config/database')

exports.createUser = async (req, res, next) => {
    try {
        const { name, age } = req.body
        const response = await db().collection('user').insertOne({
            name,
            age
        })
        if (!response) return res.status(400).json({ message: "something went wrong!" })
        res.status(200).json('user created')
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}

exports.filter = async (req, res, next) => {
    try {
        const { name, srt, page } = req.query
        console.log(srt);
        if (name) {
            const user = await db().collection('user').find({ name: { $regex: `.*${name}.*` } }).toArray()
            if (!user) return res.status(400).json('no users found')
            res.status(200).json(user)
        } else if (page) {
            const ITEMS_PER_PAGE = 5
            const user = await db().collection('user').find().skip((page - 1) * ITEMS_PER_PAGE).limit(ITEMS_PER_PAGE).toArray()
            if (!user) return res.status(400).json('no users found')
            if (user) {
                res.status(200).json(user)
            }

        } else if (srt) {
            const user = await db().collection('user').find().sort({ age: srt }).toArray()
            if (!user) return res.status(400).json('no users found')
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500)
        throw new Error(error)
    }
}


