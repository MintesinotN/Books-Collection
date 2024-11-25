import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Title:{type:String,required:true},
    Autor:{type:String,required:true},
    Isbn:{type:String},
    Published_year:{type:Number,required:true},
    favorite:{type:Boolean}
})

const bookModel = mongoose.models.books || mongoose.model("books",bookSchema);

export default bookModel;