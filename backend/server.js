const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 500

const app = express()

app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server started on port ${port}`))