const {Router} = require("express")

const sessionsRouter = require("./sessions.routes")
const userRouter = require("./user.routes")
const dishesRouter = require("./dishes.routes")
const paymentRouter = require("./payment.routes")

const routes = Router()

routes.use("/sessions", sessionsRouter)
routes.use("/dishes", dishesRouter)
routes.use("/users", userRouter)
routes.use("/payment", paymentRouter)

module.exports = routes