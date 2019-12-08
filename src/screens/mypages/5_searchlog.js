import React, { Component } from 'react';

export default class Searchlog extends Component {
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
                <h2>도움말 검색 내역</h2>
            </div>
        )
    }
}