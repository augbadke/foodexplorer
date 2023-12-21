const {Router} = require("express")

const sessionsRouter = require("./sessions.routes")
const userRouter = require("./user.routes")
const dishesRouter = require("./dishes.routes")
const paymentRouter = require("./payment.routes")
const testConectionRouter = require("./testconection.routes")

const routes = Router()

routes.use("/sessions", sessionsRouter)
routes.use("/dishes", dishesRouter)
routes.use("/users", userRouter)
routes.use("/payment", paymentRouter)
routes.use("/testconection", testConectionRouter)

module.exports = routes