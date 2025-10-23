import express from "express"
import * as bahanController from "../controllers/bahanController.js"

const api = express.Router()

api.get("/bahan", bahanController.listBahan)
api.post("/bahan", bahanController.createBahan)
api.put("/bahan/:id", bahanController.updateBahan)
api.delete("/bahan/:id", bahanController.deleteBahan)

export default api