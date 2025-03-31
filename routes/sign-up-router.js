import express from 'express'
import { pool } from '../db/Pool.js'

const signUpRouter = express.Router()
signUpRouter.use(express.json())

signUpRouter.get('/sign-up', (req, res) => {
    res.render('sign-up-form')
})

signUpRouter.post('/sign-up', async (req, res) => {
    try {

        const request = req.body
        await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2)",
            [
                request.username,
                request.password
            ])
        console.log(
            `Username: ${request.username}
                Password: ${request.password}`)
        res.redirect('/')
    }
    catch (err) {
        console.log(err)
        res.redirect('/sign-up')
    }
})

export { signUpRouter }