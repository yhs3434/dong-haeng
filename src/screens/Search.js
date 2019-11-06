import React, {Component} from 'react';
import TypoImage from '../images/typo.PNG';

class Search extends Component {
    render() {
        const style = {
            wrap: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            div: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0.5rem'
            },
            image: {
                width: '70%',
                height: '70%'
            }
        }
        return(
            <div style={style.wrap}>
                <div style={style.div}>
                    <img src={TypoImage} style={style.image}/>
                </div>
                <div style = {style.div}>
                    <input type="text" placeholder="source"/>
                    <button>검색</button>
                </div>
                <div style={style.div}>
                    <input type="text" placeholder="destination"/>
                    <button>검색</button>
                </div>
            </div>
        )
    }
}

export default Search;