import React, { Component } from 'react';

export default class Recent extends Component {
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
                <h2>최근 경로 검색</h2>
            </div>
        )
    }
}