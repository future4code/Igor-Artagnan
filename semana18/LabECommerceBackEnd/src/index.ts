import app from "./app"
import createProduct from "./endpoints/createProduct"
import createUser from "./endpoints/createUser"
import getProducts from "./endpoints/getProducts"
import getUsers from "./endpoints/getUsers"



app.post('/create/user', createUser)
app.post('/create/product', createProduct)
app.get('/products', getProducts)
app.get('/user', getUsers)