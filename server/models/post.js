module.exports = function(sequelize, DataTypes) {
  var Entry = sequelize.define("Entry", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Entry.associate = function(models) {
    // We're saying that a Entry should belong to an Author
    // A Entry can't be created without an Author due to the foreign key constraint
    Entry.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Entry;
};
