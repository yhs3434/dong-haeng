import React, {Component} from 'react';

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
                height: '600px',
                backgroundColor: 'green'
            },
            rightArticle: {
                width: '65%',
                height: '600px',
                backgroundColor: 'blue'
            },
            leftTopArticle: {
                height: '30%'
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
                        hllo
                    </section>
                    <section style={style.leftBottomArticle}>
                        bye
                    </section>
                </article>
                <article style={style.rightArticle}>

                </article>
            </div>
        )
    }
}

export default Map;