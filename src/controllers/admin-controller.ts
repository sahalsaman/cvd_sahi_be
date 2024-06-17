
import { ExpressRequest, ExpressResponse } from "../types/interfaces/app-context-interfaces"
import { ControllerBase } from "../utils/class/controller-base"
import { AdminService } from "../services/admin-service"
import { IPagination } from "../types/interfaces/common-interfaces"
import { bodyRequiredDataValidator } from "../utils/functions/validator"
import { request } from "http"
import { query } from "express"
import { IResult, IUnit } from "../types/interfaces/result-interface"


export class AdminController extends ControllerBase {
    private adminService = new AdminService()
    
    createResult = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log("hi",request.body);
        
        const body:IResult = request.body
        try {
            const required = ["category", "program","noOfResult"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            const auth = await this.adminService.createResult(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getResultList = async (request: ExpressRequest, response: ExpressResponse) => {
        const search = request.query.search as string
        try{
            const list = await this.adminService.getResultList(search)
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }


    updateResult = async (request: ExpressRequest, response: ExpressResponse) => {
        console.log(request.body);
        const body:IResult = request.body
        try {
            const required = ["category", "program","noOfResult"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            const res = await this.adminService.updateResult(request.body._id,body)
            this.jsonResponse(response,null,{data:res})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }
 
 
    deleteResult = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const res = await this.adminService.deleteResult(request?.query?.id)
            this.jsonResponse(response,null,{data:res})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

    
   


    createUnit = async (request: ExpressRequest, response: ExpressResponse) => {
        const body:IUnit = request.body
        try {
            const required = ["unit", "point"]
            const validationError = bodyRequiredDataValidator(body, required);
            if (validationError) {
                return this.error(response, 400, undefined, validationError)
            }
            const auth = await this.adminService.createUnit(body)
            this.jsonResponse(response, null, auth);
        } catch (e) {
            this.error(response, 500, null, e)
        }
    }

    getUnitList = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const list = await this.adminService.getUnitList()
            this.jsonResponse(response,null,{data:list})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }


    updateUnit = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const res = await this.adminService.updateUnitpoint(request.body.id,request.body)
            this.jsonResponse(response,null,{data:res})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }
 
 
    deleteUnit = async (request: ExpressRequest, response: ExpressResponse) => {
        try{
            const res = await this.adminService.deleteUnit(request?.query?.id)
            this.jsonResponse(response,null,{data:res})
        } catch (e) {
            // logger.error(e)
            this.error(response, 500, null, e)
        }
    }

}