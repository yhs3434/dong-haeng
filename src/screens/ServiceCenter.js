import React, {Component} from 'react';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import logo from '../images/logo_donghaeng.png';
import {Route, Switch, Link} from 'react-router-dom';
import FaqService from './serviceCenters/1_faq';
import MapService from './serviceCenters/2_map';
import CallService from './serviceCenters/3_call';
import LocationService from './serviceCenters/4_location';
import ProtectService from './serviceCenters/5_protect';
import LoginService from './serviceCenters/6_login';
import ResolveService from './serviceCenters/7_resolve';

class ServiceCenter extends Component {
    render() {
        const style= {
            wrap: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            box: {
                display: 'flex',
                alignItems:'center',
                justifyContent: 'space-between',
                width: "400px",
                border: '1px solid black',
                margin: '0.5rem',
                paddingLeft: '1rem',
                paddingRight: '1rem'
            },
            logo: {
                width: '100px',
                height: '70px',
                marginLeft: '80px'
            },
            head: {
                display: 'flex',
                flexDirection: 'row',
                height: '100px',
                alignItems: 'center'
            },
            tail: {
                display: 'flex',
                flexDirection: 'row',
                padding: '2rem'
            },
            left: {
                flex: 3,
                display: 'flex',
                flexDirection: 'column'
            },
            right: {
                flex: 7,
                display: 'flex',
                flexDirection: 'column'
            }
        }
        
        return(
            <div>
                <div style={style.head}>
                    <img src={logo} style={style.logo} />
                    <h1>고객센터</h1>
                    <input type='text' style={{marginLeft: '50px'}}/>
                    <button>검색</button>
                </div>
                <hr/>
                <div style={style.tail}>
                    <div style={style.left}>
                        <p><Link to={`${this.props.match.url}/faq`} className="sc_link">자주 사용되는 도움말</Link></p>
                        <p><Link to={`${this.props.match.url}/map`} className="sc_link">지도 검색</Link></p>
                        <p><Link to={`${this.props.match.url}/call`} className="sc_link">콜택시 이용방법</Link></p>
                        <p><Link to={`${this.props.match.url}/location`} className="sc_link">장소 추가 또는 수정</Link></p>
                        <p><Link to={`${this.props.match.url}/protect`} className="sc_link">개인 정보 보호, 접근성 알아보기</Link></p>
                        <p><Link to={`${this.props.match.url}/login`} className="sc_link">로그인 및 가입</Link></p>
                        <p><Link to={`${this.props.match.url}/resolve`} className="sc_link">문제 해결 또는 의견 보내기</Link></p>
                    </div>
                    
                    <div style={style.right}>
                        <p>{console.log(`${this.props.match.path}/faq`)}</p>
                        <Switch>
                            <Route exact path={`${this.props.match.path}/`}>
                                <FaqService/>
                            </Route>
                            <Route path={`${this.props.match.path}/faq`}>
                                <FaqService/>
                            </Route>
                            <Route path={`${this.props.match.path}/map`}>
                                <MapService/>
                            </Route>
                            <Route path={`${this.props.match.path}/call`}>
                                <CallService/>
                            </Route>
                            <Route path={`${this.props.match.path}/location`}>
                                <LocationService/>
                            </Route>
                            <Route path={`${this.props.match.path}/protect`}>
                                <ProtectService/>
                            </Route>
                            <Route path={`${this.props.match.path}/login`}>
                                <LoginService/>
                            </Route>
                            <Route path={`${this.props.match.path}/resolve`}>
                                <ResolveService/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceCenter;