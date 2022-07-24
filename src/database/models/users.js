const User = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
  },
  { timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Posts, {
      foreignKey: 'userId'
    })
  }

  return User;
}

module.exports = User;