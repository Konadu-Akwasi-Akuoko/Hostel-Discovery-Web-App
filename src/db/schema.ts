const { Model, DataTypes } = require("drizzle-orm");

class User extends Model {
  static table = "users";
  static fields = {
    id: DataTypes.AUTO_INCREMENT,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    picture: DataTypes.STRING,
    isManager: DataTypes.BOOLEAN,
  };
}

class Manager extends Model {
  static table = "managers";
  static fields = {
    id: DataTypes.AUTO_INCREMENT,
    userId: DataTypes.INTEGER,
    about: DataTypes.STRING,
    telephone: DataTypes.STRING,
  };
}

class Hostel extends Model {
  static table = "hostels";
  static fields = {
    id: DataTypes.AUTO_INCREMENT,
    name: DataTypes.STRING,
    pictures: DataTypes.STRING,
    location: DataTypes.STRING,
    feature1: DataTypes.BOOLEAN,
    feature2: DataTypes.BOOLEAN,
    about: DataTypes.STRING,
    managerId: DataTypes.INTEGER,
  };
}

class Room extends Model {
  static table = "rooms";
  static fields = {
    id: DataTypes.AUTO_INCREMENT,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    pictures: DataTypes.STRING,
    privateMeter: DataTypes.BOOLEAN,
    privateKitchen: DataTypes.BOOLEAN,
    privateBathhouse: DataTypes.BOOLEAN,
    
    about: DataTypes.STRING,
    hostelId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
  };
}

class Comments extends Model {
  static table = "comments";
  static fields = {
    id: DataTypes.AUTO_INCREMENT,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
  };
}
