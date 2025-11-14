'use strict';

export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('favoritos_comentarios', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT   // ⚠️ Usa BIGINT para coincidir con las FK
    },

    usuarioId: {
      type: Sequelize.BIGINT,  // ✅ Debe coincidir con usuarios.id
      allowNull: false,
      references: {
        model: 'usuarios',     // ✅ nombre correcto
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    comentarioId: {
      type: Sequelize.BIGINT,  // ✅ Debe coincidir con comentarios.id
      allowNull: false,
      references: {
        model: 'comentarios',  // ✅ nombre correcto
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },

    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('favoritos_comentarios');
}