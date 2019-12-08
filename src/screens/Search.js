import React, {Component} from 'react';
import TypoImage from '../images/typo.PNG';
import tableKangseo from '../images/tables/kangseo.PNG';
import tableKangnam1 from '../images/tables/kangnam1.PNG';
import tableKangnam2 from '../images/tables/kangnam2.PNG';
import tableGuro from '../images/tables/guro.PNG';

import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import arrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import arrowRight from '@material-ui/icons/KeyboardArrowRight';
import gpsFixed from '@material-ui/icons/GpsFixed';

class Search extends Component {
    constructor(props) {
        super(props);
        let guArr = []
        for (let i=0; i<24; i++){
            guArr.push(false);
        }
        this.state = {
            gu: guArr
        }
    }

    guClicked = (evt) => {
        const val = parseInt(evt.target.value);
        let guArr = []
        for (let i=0; i<24; i++){
            guArr.push(false);
        }
        this.setState({
            gu: [...guArr.slice(0,val), true, ...guArr.slice(val+1, this.state.gu.length)]
        })
    }

    render() {
        const style = {
            wrap: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            div: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0.5rem'
            },
            typoDiv: {
                display: 'flex',
                flexDirection: 'column',
                fontSize: '30px',
                alignItems: 'center',
                margin: '2rem'
            }
            ,
            image: {
                width: '70%',
                height: '70%'
            },
            buttonNotClicked: {
                backgroundColor: '#0C335A',
                color: 'white',
                border: 'none',
                padding: '5px',
                width: '100%',
                fontSize: '20px'
            },
            buttonClicked: {
                backgroundColor: 'rgb(144, 173, 202)',
                color: 'white',
                border: 'none',
                padding: '5px',
                width: '100%',
                fontSize: '20px'
            }
        }
        return(
            <div>
                <div style={style.wrap}>
                    <div style={style.typoDiv}>
                        <span>동일한 길을 걷는 발걸음</span>
                        <span>행복으로 가는 즐거움</span>
                        <span><b>우리는 <big>“</big>동행<big>”</big>입니다.</b></span>
                    </div>
                    <div style = {{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                        <div>
                            <div style = {style.div}>
                                <input className="se_input" type="text" placeholder="source"/>
                                <button style={{backgroundColor: 'transparent', border: 'none'}}>검색</button>
                            </div>
                            <div style={style.div}>
                                <input className="se_input" type="text" placeholder="destination"/>
                                <button style={{backgroundColor: 'transparent', border: 'none'}}>검색</button>
                            </div>
                        </div>
                        <div>
                            <button className="se_search_btn">경로 검색</button>
                        </div>
                    </div>
                    <div>
                        <p style={{display:'flex', alignItems:'center', fontSize: '12px'}}><Icon component={gpsFixed} style={{width:'1rem', height:'1rem', marginRight:'0.4rem'}}/>현재 위치 : 경기도 용인시 수지구 죽전동 112-421</p>
                    </div>
                </div>
                <div style={style.wrap}>
                    <table style={{width: '80%', margin:'3rem', boxShadow: 'gray 1px 1px 5px', borderCollapse: 'collapse'}}>
                        <tbody>
                            <tr>
                                <td style={{border:'none'}}><button className="se_btn" value='0' onClick={this.guClicked} style={!this.state.gu[0]?style.buttonNotClicked:style.buttonClicked}>강서구</button></td>
                                <td><button className="se_btn" value='1' onClick={this.guClicked} style={!this.state.gu[1]?style.buttonNotClicked:style.buttonClicked}>양천구</button></td>
                                <td><button className="se_btn" value='2' onClick={this.guClicked} style={!this.state.gu[2]?style.buttonNotClicked:style.buttonClicked}>구로구</button></td>
                                <td><button className="se_btn" value='3' onClick={this.guClicked} style={!this.state.gu[3]?style.buttonNotClicked:style.buttonClicked}>영등포구</button></td>
                                <td><button className="se_btn" value='4' onClick={this.guClicked} style={!this.state.gu[4]?style.buttonNotClicked:style.buttonClicked}>금천구</button></td>
                                <td><button className="se_btn" value='5' onClick={this.guClicked} style={!this.state.gu[5]?style.buttonNotClicked:style.buttonClicked}>동작구</button></td>
                            </tr>
                            <tr>
                                <td><button className="se_btn" value='6' onClick={this.guClicked} style={!this.state.gu[6]?style.buttonNotClicked:style.buttonClicked}>관악구</button></td>
                                <td><button className="se_btn" value='7' onClick={this.guClicked} style={!this.state.gu[7]?style.buttonNotClicked:style.buttonClicked}>서초구</button></td>
                                <td><button className="se_btn" value='8' onClick={this.guClicked} style={!this.state.gu[8]?style.buttonNotClicked:style.buttonClicked}>강남구</button></td>
                                <td><button className="se_btn" value='9' onClick={this.guClicked} style={!this.state.gu[9]?style.buttonNotClicked:style.buttonClicked}>송파구</button></td>
                                <td><button className="se_btn" value='10' onClick={this.guClicked} style={!this.state.gu[10]?style.buttonNotClicked:style.buttonClicked}>강동구</button></td>
                                <td><button className="se_btn" value='11' onClick={this.guClicked} style={!this.state.gu[11]?style.buttonNotClicked:style.buttonClicked}>광진구</button></td>
                            </tr>
                            <tr>
                                <td><button className="se_btn" value='12' onClick={this.guClicked} style={!this.state.gu[12]?style.buttonNotClicked:style.buttonClicked}>성동구</button></td>
                                <td><button className="se_btn" value='13' onClick={this.guClicked} style={!this.state.gu[13]?style.buttonNotClicked:style.buttonClicked}>용산구</button></td>
                                <td><button className="se_btn" value='14' onClick={this.guClicked} style={!this.state.gu[14]?style.buttonNotClicked:style.buttonClicked}>중구</button></td>
                                <td><button className="se_btn" value='15' onClick={this.guClicked} style={!this.state.gu[15]?style.buttonNotClicked:style.buttonClicked}>마포구</button></td>
                                <td><button className="se_btn" value='16' onClick={this.guClicked} style={!this.state.gu[16]?style.buttonNotClicked:style.buttonClicked}>서대문구</button></td>
                                <td><button className="se_btn" value='17' onClick={this.guClicked} style={!this.state.gu[17]?style.buttonNotClicked:style.buttonClicked}>종로구</button></td>
                            </tr>
                            <tr>
                                <td><button className="se_btn" value='18' onClick={this.guClicked} style={!this.state.gu[18]?style.buttonNotClicked:style.buttonClicked}>성북구</button></td>
                                <td><button className="se_btn" value='19' onClick={this.guClicked} style={!this.state.gu[19]?style.buttonNotClicked:style.buttonClicked}>은평구</button></td>
                                <td><button className="se_btn" value='20' onClick={this.guClicked} style={!this.state.gu[20]?style.buttonNotClicked:style.buttonClicked}>강북구</button></td>
                                <td><button className="se_btn" value='21' onClick={this.guClicked} style={!this.state.gu[21]?style.buttonNotClicked:style.buttonClicked}>노원구</button></td>
                                <td><button className="se_btn" value='22' onClick={this.guClicked} style={!this.state.gu[22]?style.buttonNotClicked:style.buttonClicked}>중랑구</button></td>
                                <td><button className="se_btn" value='23' onClick={this.guClicked} style={!this.state.gu[23]?style.buttonNotClicked:style.buttonClicked}>노원구</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{display: 'flex', margin:'2rem', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <IconButton component={arrowLeft} />
                        <div>
                            <img src={tableKangseo} style={!this.state.gu[0]?{display:'none'}:{display:'flex'}}/>
                            <div style={{display:'flex', flexWrap: 'wrap', alignItems: 'center'}}>
                                <img src={tableKangnam1} style={!this.state.gu[1]?{display:'none'}:{display:'flex'}}/>
                                <img src={tableKangnam2} style={!this.state.gu[1]?{display:'none'}:{display:'flex'}}/>
                            </div>
                            <img src={tableGuro} style={!this.state.gu[2]?{display:'none'}:{display:'flex'}}/>
                        </div>
                        <IconButton component={arrowRight} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;