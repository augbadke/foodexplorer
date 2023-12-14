const { Router } = require("express")

const PaymentController = require("../controllers/PaymentController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const paymentRoutes = Router()

const paymentController = new PaymentController()

paymentRoutes.use(ensureAuthenticated)

paymentRoutes.post("/", paymentController.create)
paymentRoutes.get("/:id", paymentController.show)
paymentRoutes.get("/", paymentController.index)
paymentRoutes.put("/", paymentController.update)

module.exports = paymentRoutes
