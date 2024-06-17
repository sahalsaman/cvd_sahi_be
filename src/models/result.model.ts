import mongoose, {Schema} from "mongoose";

const ResultSchema=new mongoose.Schema({
    category:{type:String},
    program:{type:String},
    noOfResult:{type:String},
    f_name:{type:String},
    f_unit:{type:String},
    s_name:{type:String},
    s_unit:{type:String},
    t_name:{type:String},
    t_unit:{type:String},
},
{
  timestamps: true,
})

const ResultModel=mongoose.model<mongoose.Document>("result",ResultSchema)
export default ResultModel