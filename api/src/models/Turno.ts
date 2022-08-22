const { DataTypes } = require('sequelize');

module.exports = (sequelize: any) => {
    sequelize.define('Turno', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allownull: false,
            primaryKey: true,
        },
        tipo: {
            type: DataTypes.STRING,
            allownull: false,
        },
        prof: {
            type: DataTypes.STRING,
            allownull: false,
        },
        dia: {
            type: DataTypes.DATEONLY,
            allownull: false,
        },
        hora: {
            type: DataTypes.TIME,
            allownull: false,
        },
        solicited: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allownull: false
        }
    }, {
        timestamps: true,
    })
}