import mongoose, {Schema} from "mongoose";

const UnitSchema=new mongoose.Schema({
    unit:{type:String},
    point:{type:String},
    totalResult:{type:String},
},
{
  timestamps: true,
})

const UnitModel=mongoose.model<mongoose.Document>("unit",UnitSchema)
export default UnitModel