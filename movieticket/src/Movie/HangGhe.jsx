import React, { Component } from 'react'
import { connect } from 'react-redux'

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((chair, index) => {
            let gheDaDat = "";
            let disable = false;

            if (chair.daDat) {
                gheDaDat = "gheDuocChon"
                disable = true;
            }

            let gheDangChon = ""
            let GheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === chair.soGhe)
            if (GheDangDat !== -1) {
                gheDangChon = 'gheDangChon'
            }
            return <button onClick={() => { this.props.datGhe(chair) }} disabled={disable} className={`ghe ${gheDaDat} ${gheDangChon}`} key={index} style={{ marginLeft: '12px' }}>
                {chair.soGhe}
            </button>

        })
    }
    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <span className='rowNumber' key={index}>
                {hang.soGhe}
            </span>
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div>

                {this.renderSoHang()}
            </div>
        } else {
            return <div>
                <span style={{ fontSize: '20px' }} className='pr-2'>{this.props.hangGhe.hang}</span>
                {this.renderGhe()}
            </div>
        }

    }


    render() {
        return (
            <div className='text-warning text-left  mt-2'>
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        danhSachGheDangDat: state.movieReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (chair) => {
            dispatch({
                type: 'DAT_GHE',
                payload: chair
            })
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
