import { Application } from "express";
import admin from './admin/admin-router'
// import user from './users/user-routes'

const endPoint = (app: Application) => {
    app.get('/', (req, res) => {
        res.send("welcome to E-shop REST services") 
        console.log("start")
    })
    app.use('/admin',admin)
}
export default endPoint