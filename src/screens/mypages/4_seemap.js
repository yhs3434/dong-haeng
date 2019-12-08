import React, { Component } from 'react';

export default class Seemap extends Component {
    render() {
        const style = {
            wrap : {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '600px'
            }
        }
        return (
            <div style={style.wrap}>
                <h2>지도 보기 설정</h2>
            </div>
        )
    }
}