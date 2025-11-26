export const validateTaskBody = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || typeof title !== 'string' || title.trim().length < 3) {
        return res.status(400).json({ message: 'Titulo no valido' });
    }
    if (!description || typeof description !== 'string') {
        return res.status(400).json({ message: 'Description inválida' });
    }
    next();
};