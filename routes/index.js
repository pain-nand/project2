import express from "express"
import oAuthRouter from "./oAuth.route.js"
const router = express.Router()

router.use("/auth", oAuthRouter)

export default router

