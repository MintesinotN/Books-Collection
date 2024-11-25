import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import bookRouter from './routes/bookRoute.js'

const app = express()
const port = process.env.PORT || 4000;

app.use(express.json())
app.use(cors())

connectDB();

app.use('/',bookRouter)
app.use('/', (req, res) => {
    res.send('Welcome to my backend server!');
  })

app.listen(port,()=>console.log(`Server Started on http://localhost:${port}`))