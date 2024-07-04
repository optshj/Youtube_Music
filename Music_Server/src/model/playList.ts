import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlayListSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    owner:{
        type: String,
        required: true
    },
    descript:{
        type: String,
        default: ""
    },
    url:{
        type: String,
        required:true
    }
});

export default mongoose.model('PlayList', PlayListSchema);