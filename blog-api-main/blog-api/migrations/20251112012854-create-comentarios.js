export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("comentarios", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT
    },

    contenido: {
      type: Sequelize.TEXT,
      allowNull: false
    },

    postId: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: "blogs",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },

    usuarioId: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
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
  await queryInterface.dropTable("comentarios");
}
