const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)

const app = express()

app.use(express.json)
app.use(cors())
app.use("/api/model", require("./routes/route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resorce not found" })
})
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "somthing went wrong" })
})

mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("server running"))
})