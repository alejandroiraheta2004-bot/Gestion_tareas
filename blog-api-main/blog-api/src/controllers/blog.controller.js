import * as blog from '../models/blog.model.js';

export const getBlogs = async (req, res) => {
    try {
        const dataBlogs = await blog.getAllBlogs(); 
        res
        .status(200)
        .json({
            message: "Blogs obtenidos con exito",
            data: dataBlogs
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al obtener los blogs",
            error: error
        });
    }
};

export const getBlog = async (req, res) => {
    try {
        const blogData = await blog.getBlogById(req.params.id);
        if(!blogData) res.status(404).json({ message: "Blog no encontrado" });
        res
        .status(200)
        .json({
            message: "Blog encontrado",
            data: blogData
        });
    } catch (error) {
        res
        .status(500)    
        .json({
            message: "Error al obtener el blog",
            error: error
        });
    }  
};

export const addBlog = async (req, res) => {
    try {
        req.body.imagen = req.file ? req.file.path : null;
        const blogData = await blog.createBlog(req.body);
        res
        .status(201)
        .json({
            message: "Blog creado con exito",
            data: blogData
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al crear el blog",
            error: error
        });
    }
};

export const editBlog = async (req, res) => {
    try {
        const imagen = req.file ? req.file.path : null;
        const blogData = await blog.updateBlog(req.params.id, req.body);
        res
        .status(200)
        .json({
            message: "Blog actualizado con exito",
            data: blogData
        });
    } catch (error) {
        res
        .status(500)
        .json({
            message: "Error al actualizar el blog",
            error: error
        });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        await blog.deleteBlog(req.params.id);
        res
        .status(200)
        .json({
            message: "Blog eliminado con exito"
        });
    }
    catch (error) {
        res
        .status(500)
        .json({
            message: "Error al eliminar el blog",
            error: error
        });
    }
}



