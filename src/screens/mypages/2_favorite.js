import React, { Component } from 'react';

export default class Favoirte extends Component {
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
                <h2>자주 가는 경로 등록</h2>
            </div>
        )
    }
}