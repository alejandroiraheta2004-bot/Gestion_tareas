'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class FavoritoComentario extends Model {
        static associate(models) {
            FavoritoComentario.belongsTo(models.Usuario, {
                foreignKey: 'usuarioId',
                as: 'usuario'
            });
            FavoritoComentario.belongsTo(models.Comentario, {
                foreignKey: 'comentarioId',
                as: 'comentario'
            });
        }
    }

    FavoritoComentario.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comentarioId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'FavoritoComentario',
        tableName: 'favoritos_comentarios',
        timestamps: true
    });

    return FavoritoComentario;
};