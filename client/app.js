// Initializes your Express app
// Configures middlewares
// Sets up API routes
// Prepares your application to handle HTTP requests

import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.routes.js'                        /* login, registration, token handling*/
import adminRouter from './routes/admin.routes.js'                      /*admin dashboard actions, user management*/
import productRouter from './routes/product.routes.js'                  /* managing products (CRUD)*/
import publicRouter from './routes/public.routes.js'                    /*routes accessible without authentication*/
export const app = express()


// security feature This allows your backend to accept requests from different domains
app.use(cors())
//Parses incoming requests with JSON payloads (e.g., req.body becomes available for POST/PUT requests with JSON).
app.use(express.json())
//Serves static files (like images, CSS, JS) from the public folder public/logo.png would be accessible via http://localhost:5000/logo.png
app.use(express.static('public'))
//extended: true allows for rich objects and arrays to be encoded into the URL-encoded format.
app.use(express.urlencoded({extended:true}))

// routes
app.use('/api/v1/public', publicRouter)
app.use('/api/v1', authRouter,productRouter)
app.use('/back-office/access/admin', adminRouter)