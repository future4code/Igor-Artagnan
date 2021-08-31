import app from "./app"
import { getAddressInfo } from "./endpoints/getAddressInfo"


getAddressInfo("38073011")
    .then(console.log)
