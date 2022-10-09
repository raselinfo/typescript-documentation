import express, { Request, Response } from "express"
import cors from "cors"
import router from "./router"
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"]
}))
app.use("/api", router)
app.listen(8000, () => {
    console.log("http://localhost:8000")
})