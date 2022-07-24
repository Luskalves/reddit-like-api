const Post = (sequelize, DataTypes) => {
  const Post = sequelize.define('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,

  },
  { timestamps: false });

  Post.associate = (models) => {
    Post.belongsTo(models.Users, {
      foreignKey: 'userId'
    })
  }

  return Post;
}

module.exports = Post;