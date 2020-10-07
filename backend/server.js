import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

// Routes
import productRoutes from './routes/productRoutes.js'

// Server & Database
dotenv.config()
connectDB()
const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('API is running....')
})
app.use('/api/products', productRoutes)

// Middleware
app.use(notFound)
app.use(errorHandler)
app.use(cors)

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
