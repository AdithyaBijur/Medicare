const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use('/api', require('./Routes/index'))



mongoose.connect("mongodb://localhost/user", { useNewUrlParser: true })
    .then(console.log("Hello"))
    .catch((err) => console.log(console.error("error" + err)));

app.listen(5000, () => console.log('Server started on port 5000'));

