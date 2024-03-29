const sequelize = require("../../lib/sequelize");
const { DataTypes, Model } = require("sequelize");
const User = require("./User");
const Transaction = require("./Transaction");
const Credential = require("./Credential");
const bcrypt = require("bcryptjs");

// Generation du model
class Merchant extends Model {}
Merchant.init(
  {
    name: DataTypes.STRING,
    firstname: DataTypes.STRING,
    url_validation:  DataTypes.STRING,
    url_echec:  DataTypes.STRING,
    kbis: DataTypes.TEXT,
    email:  {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email is not valid",
        },
      },
    },
    contact:  {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: {
          msg: "Email is not valid",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    repayment_currency: DataTypes.INTEGER,
    verify: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Merchant",
    paranoid: true,
  }
);

// Many to Many
Merchant.belongsToMany(User,{
  through:"UserMerchant"
}) 
User.belongsToMany(Merchant,{
  through:"UserMerchant"
}) 

// MANY Clients TO ONE Article
// Client.belongsTo(Article) => Client.article
// One Article TO MANY Clients
// Article.hasMany(Client) => Article.Clients

// ONE Merchant TO MANY Transaction
Merchant.hasMany(Transaction); // Client.articles
// MANY Transaction TO ONE Merchant
Transaction.belongsTo(Merchant); // Article.Client

// ONE Merchant TO MANY Credential
Merchant.hasMany(Credential); // Client.articles
// MANY Credential TO ONE Merchant
Credential.belongsTo(Merchant); // Article.Client

Merchant.addHook("beforeCreate", async (merchant, options) => {
  const salt = await bcrypt.genSalt();
  merchant.password = await bcrypt.hash(merchant.password, salt);
});

module.exports = Merchant;


