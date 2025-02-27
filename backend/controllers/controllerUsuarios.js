function guardarUsuario(usuario){


try {
    // const{ id, nombreCompleto, correo, contrasenia } = usuario;
    const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
    Insert(JSON.parse(usuario), sheetUsuarios);
    //sheetUsuarios.appendRow([id, nombreCompleto, correo, contrasenia]);
    return {
        titulo: "Registro exitoso",
        descripcion: "Ya se encuentra el usuario en la base de datos."
    };
} catch (error) {
    return{
        titulo: "Ops ha ocurrido un error! "+ error,
        descripcion: "Porfavor contacte a soporte."
    };
}
    
}

function listarUsuarios(id = undefined){
    //return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIOS), id));
}