import { Application } from 'express'
import configMongodb from '../mongodb'
import api from '../../routes'
import * as dotenv from 'dotenv'
import middlewares from '../../middlewares'

dotenv.config()
export default (app: Application) => {
    let port = portNumber()
    let password="ydEjlYTJtUXPiGuS"
    let user_name="sahal"
    configMongodb(`mongodb+srv://${user_name}:${password}@cluster0.fbngfbs.mongodb.net/?retryWrites=true&w=majority`)
    api(app)
    middlewares(app);
    return app.listen(port, () => {
        console.log("start server ", port)
    })
}

const portNumber = (): number => {
    return 3200
}