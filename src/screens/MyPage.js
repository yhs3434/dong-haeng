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
            }
        }
        return(
            <div>
                <div style={style.head}>
                    <img src={logo} style={style.logo} />
                    <h1>마이페이지</h1>
                </div>
                <hr/>
                <div style={style.mid}>
                    <Link to={`${this.props.match.url}/information`}><span>회원 정보 수정</span></Link>
                    <Link to={`${this.props.match.url}/favorite`}><span>자주 가는 경로 등록</span></Link>
                    <Link to={`${this.props.match.url}/recent`}><span>최근 경로 검색</span></Link>
                    <Link to={`${this.props.match.url}/seemap`}><span>지도 보기 설정</span></Link>
                    <Link to={`${this.props.match.url}/searchlog`}><span>도움말 검색 내역</span></Link>
                </div>
                <div>
                    <Switch>
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