import app from "./app"
import createProduct from "./endpoints/createProduct"
import createUser from "./endpoints/createUser"



app.post('/create/user', createUser)
app.post('/create/product', createProduct)