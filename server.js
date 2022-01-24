const express = require('express')
const app = express()
const { PORT } = require("./constants/app-constants")

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`))

module.exports = app;