

export interface IResult {
    _id?: String,
    category?: String,
    program?: String,
    noOfResult?: String,
    f_name?: String,
    f_unit?: String,
    s_name?: String,
    s_unit?: String,
    t_name?: String,
    t_unit?: String,
}
 
export interface IRsults{
    position: Number,
    name: String,
    unit: String
}

export interface IUnit {
    _id?: string,
    unit?: string,
    point?: string,
    totalResult?: string,
}