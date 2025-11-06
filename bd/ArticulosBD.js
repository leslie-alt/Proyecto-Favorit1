import articulo  from "../models/articulos.js";


export async function crearArticulo({nombre, categoria, calificacion}){
    const nuevoArticulo = new articulo({
        nombre: nombre,
        categoria: categoria,
        calificacion: calificacion
    })
    const respuestaMongo = await nuevoArticulo.save();
    return respuestaMongo;
}

export async function mostrarArticulos(){
    const articulosBD = await articulo.find().populate("categoria").lean();
    return articulosBD;
}


export async function mostrarArticuloPorId(id){
    const articuloBD = await articulo.findById(id).populate("categoria").lean();
    return articuloBD;
}

export async function editarArticulo(id, datos) {
    const respuestaMongo = await articulo.findByIdAndUpdate(id, datos, { new: true });
    return respuestaMongo;
}

export async function eliminarArticulo(id){
    const articuloEliminado = await articulo.findByIdAndDelete(id);
    return articuloEliminado;
}