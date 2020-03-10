import { Request, Response } from "express";
import { getRepository } from "typeorm";        //obtener una tabla de la BD
import { User } from "../entity/User";

//PARA CONSULTAR LOS USUARIOS DE LA BASE DE DATOS
export const getUsers = async (req: Request ,res:Response): Promise<Response> => {
    const users = await getRepository(User).find();           //es como realizar un SELECT * FROM
    return res.json(users); 
};


//PARA CONSULTAR UN USUARIO EN ESPECIFICO DE LA BASE DE DATOS
export const getUser = async (req: Request ,res:Response): Promise<Response> => {
    const results = await getRepository(User).findOne(req.params.id);  //es como realizar un SELECT * FROM
    return res.json(results); 
};


//PARA CREAR UN USUARIO NUEVO
export const createUser = async (req: Request ,res:Response): Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const results = await getRepository(User).save(newUser);
    return res.json(results);
};

//PARA ACTUALIZR UN USUARIO NUEVO
export const updateUser = async (req: Request ,res:Response): Promise<Response> => {    //el PROMISE indica que siempre regresa algo
    const user = await getRepository(User).findOne(req.params.is);  //checamos el usuario 
    if (user){
        getRepository(User).merge(user, req.body);  //combina el nuevo dato a la base de datos
        const results = await getRepository(User).save(user);   //guarda el dato
        return res.json(results);
    }
    return res.status(404).json({msg : 'Usuario no encontrado'});
};


//PARA ELIMINAR LOS USUARIOS DE LA BASE DE DATOS
export const deleteUser = async (req: Request ,res:Response): Promise<Response> => {
    const results = await getRepository(User).delete(req.params.id);  //es como realizar un SELECT * FROM
    return res.json(results); 
};
