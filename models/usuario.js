
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    usuario:{
        type: String,
        required: true,
        trim: true
    },
    contrasenya: {
        type: String,
        required: true,
        trim: true

    }

});

export default mongoose.model("Usuario", usuarioSchema);