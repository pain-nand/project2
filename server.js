import express from "express"
import dotenv from "dotenv"
import apiRouter from "./routes/index.js"
dotenv.config()
const app = express()
const PORT = 4000 || process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log(`server was started on ${PORT} port`)
})