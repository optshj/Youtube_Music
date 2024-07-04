import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Number,
        required: true
    },
    playTime:{
        type: Number,
        required: true
    }
});

export default mongoose.model('Music', MusicSchema);