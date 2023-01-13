import React, { Component } from 'react'
import './Ticket.css'
import HangGhe from './HangGhe'
import ThongTinGhe from './ThongTinGhe'
import danhSachGheData from './danhSachGhe.json'

export default class BookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((chair, index) => {
            return <div key={index}>
                <HangGhe hangGhe={chair} soHangGhe={index} />
            </div>
        })
    }

    render() {
        return (
            <div className='bookingMovie'>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.7)', position: "fixed", width: "100%", height: "100%" }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <div className='text-light display-4'>ĐẶT VÉ XEM PHIM</div>
                                <div style={{ fontSize: '20px ' }} className='mt-3 text-light'>Màn hình</div>
                                <div className='mt-1' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <div className='screen'></div>
                                </div>
                                {this.renderHangGhe()}
                            </div>
                            <div className='col-4 text-center'>
                                <div className='mt-2 text-warning' style={{ fontSize: '30px' }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                                <ThongTinGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
