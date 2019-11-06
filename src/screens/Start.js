import React, {Component} from 'react';
import TypoImage from '../images/typo.PNG';

export default class Start extends Component {
    render() {
        const style= {
            wrap: {
                display: 'flex',
                width: '100%',
                height: '700px',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
        return(
            <div style={style.wrap}>
                <img src={TypoImage} />
            </div>
        )
    }
}