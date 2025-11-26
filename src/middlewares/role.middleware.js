export const checkRole = (roleExpected) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'No autorizado' });
    }

    if (req.user.role !== roleExpected) {
        return res.status(403).json({ message: 'Acceso denegado: requiere rol ' + roleExpected });
    }

    next();
};
