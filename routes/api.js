import express from "express"
import * as bahanController from "../controllers/bahanController.js"
import * as authController from "../controllers/authController.js"
import {protect} from "../middleware/authmiddleware.js"

const api = express.Router()

api.get("/bahan", bahanController.listBahan)
api.post("/bahan", bahanController.createBahan)
api.put("/bahan/:id", bahanController.updateBahan)
api.delete("/bahan/:id", bahanController.deleteBahan)

api.post('/register', authController.register);
api.post('/login', authController.login);

api.get('/me',protect , authController.privateProfile);

export default api