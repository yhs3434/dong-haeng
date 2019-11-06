import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        const style = {
            wrap: {
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'gray',
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }
        }
        return (
            <div style={style.wrap}>
                <span>Footer</span>
            </div>
        )
    }
}