import mongoose from "mongoose";

const bahanSchema = new mongoose.Schema(
    {
        ingredientName : {
            type: String,
            required : true,
            trim : true,
        },
        quantity : {
            type : String,
            required: true,
            trim: true,
        },
        expiryDate : {
            type: Date,
            required : true,
            trim: true,
        }
    },
    {timestamps : true}
)

const bahanModel = new mongoose.model ("Bahan", bahanSchema);
export default bahanModel;
//{ ingredientName: String, quantity: String, expiryDate: Date }