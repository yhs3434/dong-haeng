import React, {Component} from 'react';
import busImage from '../images/bus.png';
import mapImage from '../images/map.PNG';

class Map extends Component {
    render() {
        const style= {
            wrap: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap'
            },
            leftArticle: {
                display: 'flex',
                flexDirection: 'column',
                width: '35%',
                height: '1000px',
            },
            rightArticle: {
                width: '65%',
                height: '1000px',
                backgroundColor: 'blue'
            },
            leftTopArticle: {
                display: 'flex',
                flexDirection: 'row',
                height: '30%',
                justifyContent: 'center',
                alignItems: 'center'
                
            },
            leftBottomArticle: {
                height: '70%',
                backgroundColor: 'red'
            }
        }
        return(
            <div style={style.wrap}>
                <article style={style.leftArticle}>
                    <section style={style.leftTopArticle}>
                        <div style={{display:'flex', flexDirection:'column'}}>
                            <div>
                                <span>출발지</span>
                                <input type='text' />
                            </div>
                            <div>
                                <span>도착지</span>
                                <input type='text' />
                            </div>
                        </div>
                        <div>
                            <button>검색</button>
                        </div>
                    </section>
                    <section style={style.leftBottomArticle}>
                        <img src={busImage} style={{width:'100%', height:'100%'}}/>
                    </section>
                </article>
                <article style={style.rightArticle}>
                    <img src={mapImage} style={{width:'100%', height:'100%'}} />
                </article>
            </div>
        )
    }
}

export default Map;