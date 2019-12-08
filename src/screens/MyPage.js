import React, {Component} from 'react';
import ButtonImage1 from '../images/mypage1.png';
import logo from '../images/logo_donghaeng.png'
import {Route, Switch, Link} from 'react-router-dom';
import Information from './mypages/1_information';
import Favorite from './mypages/2_favorite';
import Recent from './mypages/3_recent';
import Seemap from './mypages/4_seemap';
import Searchlog from './mypages/5_searchlog';

class MyPage extends Component {
    state = {
        
    }

    render() {
        const style= {
            wrap: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            },
            head: {
                display: 'flex',
                flexDirection: 'row',
                height: '100px',
                alignItems: 'center'
            },
            logo: {
                width: '100px',
                height: '70px',
                marginLeft: '80px'
            },
            mid: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
            },
            link: {
                textDecoration: 'none',
            },
            hr: {
                border: 'solid 0.6px #0C335A',
            }
        }
        return(
            <div>
                <div style={style.head}>
                    <img src={logo} style={style.logo} />
                    <h1>마이페이지</h1>
                </div>
                <hr style={style.hr}/>
                <div className="link_wrap" style={style.mid}>
                    <Link className="mp_link" to={`${this.props.match.url}/information`} 
                    style={style.link}><span>회원 정보 수정</span></Link>
                    <Link className="mp_link" to={`${this.props.match.url}/favorite`} style={style.link}><span>자주 가는 경로 등록</span></Link>
                    <Link className="mp_link" to={`${this.props.match.url}/recent`} style={style.link}><span>최근 경로 검색</span></Link>
                    <Link className="mp_link" to={`${this.props.match.url}/seemap`} style={style.link}><span>지도 보기 설정</span></Link>
                    <Link className="mp_link" to={`${this.props.match.url}/searchlog`} style={style.link}><span>도움말 검색 내역</span></Link>
                </div>
                <hr style={style.hr}/>
                <div>
                    <Switch>
                        <Route exact path={`${this.props.match.path}/`}>
                            <Information/>
                        </Route>
                        <Route path={`${this.props.match.path}/information`}>
                            <Information/>
                        </Route>
                        <Route path={`${this.props.match.path}/favorite`}>
                            <Favorite/>
                        </Route>
                        <Route path={`${this.props.match.path}/recent`}>
                            <Recent/>
                        </Route>
                        <Route path={`${this.props.match.path}/seemap`}>
                            <Seemap/>
                        </Route>
                        <Route path={`${this.props.match.path}/searchlog`}>
                            <Searchlog/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default MyPage;