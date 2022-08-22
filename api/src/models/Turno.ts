import { DataTypes } from 'sequelize';

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
            type: DataTypes.DATE,
            allownull: false,
        },
        hora: {
            type: DataTypes.TIME,
            allownull: false,
        }
    }, {
        timestamps: true,
    })
}