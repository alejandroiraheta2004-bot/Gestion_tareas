import * as Subcategory from '../models/subcategory.model.js';

export const getSubcategories = async (req, res) =>{
    try {
        const dataSubcategories = await Subcategory.getAllSubcategories();
        res
        .status(200)
        .json({ 
            message:"Subcategorias obtenidas con exito", 
            data: dataSubcategories
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener las subcategorias",
            error: error
        });
    }
}

export const getSubcategory = async (req, res) =>{
    try {
        const subcategory = await Subcategory.getSubcategoryById(req.params.id);
        if(!subcategory) res.status(404).json({ message:"Subcategoria no encontrada" });
        res
        .status(200)
        .json({
            message: "Subcategoria encontrada",
            data: subcategory
        })
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener la subcategoria",
            error: error
        });
    }
}

export const addSubcategory = async (req, res) =>{
    try {
        const subcategory = await Subcategory.createSubcategory(req.body);
        res
        .status(201)
        .json({
            message: "Subcategoria creada con exito",
            data: subcategory
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al crear la subcategoria",
            error: error
        });
    }
}

export const editSubcategory = async (req, res) =>{
    try {
        const subcategory = await Subcategory.updateSubcategory(req.params.id, req.body);
        res.
        status(200)
        .json({
            message: "Subcategoria actulizada con exito",
            data: subcategory
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al actualizar la subcategoria",
            error: error
        });
    }
}

export const removeSubcategory = async (req, res) =>{
    try {
        await Subcategory.deleteSubcategory(req.params.id);
        res.
        status(200)
        .json({
            message: "Subcategoria eliminada"
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al actualizar la subcategoria",
            error: error
        });
    }
}