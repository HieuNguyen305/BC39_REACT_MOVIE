import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinGhe extends Component {
    render() {
        return (
            <div>
                <div className=' mt-5'>
                    <button className='gheDuocChon' style={{ marginLeft: '-20px' }}> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế đã đặt</span>
                    <br />
                    <button className='gheDangChon'> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế đang đặt</span>
                    <br />
                    <button className='ghe' style={{ marginLeft: '-2px' }}> </button> <span style={{ fontSize: '20px' }} className='text-light'>Ghế chưa đặt</span>
                </div>

                <div className='mt-5'>
                    <table className='table' border={2}>
                        <thead>
                            <tr className='text-light' style={{ fontSize: '25px' }} >
                                <th>Số ghế</th>
                                <th>Giá </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((gheDangDat) => {
                                return <tr key={gheDangDat.soGhe} className="text-light">
                                    <td>{gheDangDat.soGhe}</td>
                                    <td>{(gheDangDat.gia).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => { this.props.huyGhe(gheDangDat.soGhe) }} className="btn btn-danger">Hủy</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2} className='text-success'>Tổng tiền</td>
                                <td className='text-warning'> {(this.props.danhSachGheDangDat.reduce((sum, item) => {
                                    return sum += item.gia
                                }, 0)).toLocaleString() + 'đ'}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.danhSachGheDangDat,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        huyGhe: (soGhe) => {
            dispatch({
                type: "HUY_GHE",
                payload: soGhe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinGhe)