const { FavoritoComentario } = require('../models');

module.exports = {
    async getAll(req, res) {
        try {
            const favoritos = await FavoritoComentario.findAll();
            res.json(favoritos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getById(req, res) {
        try {
            const favorito = await FavoritoComentario.findByPk(req.params.id);
            if (!favorito) return res.status(404).json({ message: 'Favorito no encontrado' });
            res.json(favorito);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { usuarioId, comentarioId } = req.body;
            const nuevo = await FavoritoComentario.create({ usuarioId, comentarioId });
            res.status(201).json(nuevo);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async update(req, res) {
        try {
            const favorito = await FavoritoComentario.findByPk(req.params.id);
            if (!favorito) return res.status(404).json({ message: 'No encontrado' });
            await favorito.update(req.body);
            res.json(favorito);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async delete(req, res) {
        try {
            const favorito = await FavoritoComentario.findByPk(req.params.id);
            if (!favorito) return res.status(404).json({ message: 'No encontrado' });
            await favorito.destroy();
            res.json({ message: 'Favorito eliminado' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};