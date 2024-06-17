import ResultModel from "../models/result.model";
import UnitModel from "../models/unit.model";
import { IResult, IUnit } from "../types/interfaces/result-interface";

export class AdminService {
 

    constructor() { }


    createResult = async (data: IResult): Promise<IResult> => {
        return await ResultModel.create(data);
    }

    getResultList = async (search?: string): Promise<IResult[]> => {
        let filter: any = {}
        if (search) {
            filter = { $or: [{ name: { $regex: search, $options: 'i' } }] }
        }
        let list = await ResultModel.find(filter).sort({ 'createdAt': -1 })
        return list
    }

    updateResult =  async (id:any,data:any):Promise<any> => {
        console.log(data);
        
        return ResultModel.findByIdAndUpdate(id, data);
    }


    deleteResult =  async (id:any) => {
        return ResultModel.findByIdAndDelete(id);
    }
    





    createUnit = async (data: IUnit): Promise<IUnit> => {
        console.log(data);
        
        return await UnitModel.create(data);
    }

    getUnitList = async (): Promise<IUnit[]> => {
        let list = await UnitModel.find().sort({ 'point': -1 })
        return list
    }

    updateUnitpoint =  async (id:any,data:any):Promise<any> => {
        return UnitModel.findByIdAndUpdate(id, data);
    }


    deleteUnit =  async (id:any) => {
        return UnitModel.findByIdAndDelete(id);
    }

}