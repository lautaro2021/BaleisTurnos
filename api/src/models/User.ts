// const { DataTypes } = require('sequelize');

// module.exports = (sequelize: any) => {
//     sequelize.define('User', {
//         id: {
//             type: DataTypes.STRING,
//             allownull: false,
//             primaryKey: true,
//         },
//         admin: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false,
//         },
//         name: {
//             type: DataTypes.STRING(50),
//             allownull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allownull: false,
//         },
//         password: {
//             type: DataTypes.STRING(20),
//             allownull: false,
//         },
//         phone: {
//             type: DataTypes.STRING,
//             allownull: false,
//         },
//         avatar: {
//             type: DataTypes.STRING,
//             allownull: false,
//         }
//     }, {
//         timestamps: true
//     })
// }