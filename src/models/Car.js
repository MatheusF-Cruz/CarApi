import mongoose from 'mongoose'

const Schema = new mongoose.Schema({
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marca',
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    versao: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        required: true,
    }

})

export default mongoose.model('Car', Schema)