import { Schema } from "mongoose";

export const careerSchema = new Schema({
    career :{
        type : String,
        default :null
    }
})
careerSchema.set("toJSON", {
    virtuals: true,
    transform: (doc, ret, options) => {
        delete ret.__v;
        ret.id = ret._id.toString();
        delete ret._id;
    },
});
careerSchema.set("timestamps", true);