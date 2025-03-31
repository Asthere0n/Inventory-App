import express from 'express'
import path from 'path'
import { indexRouter } from './routes/index-router.js'
import { signUpRouter } from './routes/sign-up-router.js'
import session from 'express-session'
import passport from 'passport'
import LocalStrategy from 'passport-local'
import { fileURLToPath } from 'url'

//Initialize the server
const app = express()

// Working directory path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// MIDDLEWARE
// EJS View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// JSON Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, ()=>{
    console.log('Server up and running in http://localhost:3000')
})

app.use(indexRouter)
app.use(signUpRouter)

