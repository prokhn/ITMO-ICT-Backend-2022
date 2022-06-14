import { AllowNull, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import UserModel from '../users/UserModel'

export type SeatClassEnum = 'ECONOM' | 'COMFORT' | 'BUSINESS'

@Table
export default class SeatModel extends Model {
    @AllowNull(false)
    @Column(DataType.ENUM('ECONOM', 'COMFORT', 'BUSINESS'))
    seatClass: SeatClassEnum

    @Column({ allowNull: false })
    price: number

    @Column({ allowNull: false })
    count: number

    @ForeignKey(() => UserModel)
    createdBy: number
}
