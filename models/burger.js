//------Sequelized Burger Model-----

module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP()'), 
        },
    });

    Burger.associate = function(models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return Burger;
};


// Old ORM Code
// var burger = {
//     showAllBurger: function (callback) {
//         orm.selectAll(function(data) {
//             callback(data);
//         });
//     },
//     insertBurger: function (burgerName, callback) {
//         orm.insertOne(burgerName, function(data) {
//             callback(data);
//         });
//     },
//     eatOneBurger: function (burgerID, callback) {
//         orm.updateOne(burgerID, function(data) {
//             callback(data);
//         });
//     }
// }

//module.exports = burger;