import React, {Component} from 'react';
import logo from '../images/logo_donghaeng.png';

class Login extends Component {
    render() {
        const style = {
            totalWrap: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
            },
            secondWrap: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5rem'
            }
            ,
            image: {
                width: '200px',
                height: '150px'
            },
            inputWrap: {
                display: 'flex',
                flexDirection: 'column'
            },
            span: {
                margin: '1rem'
            }
        }
        return(
            <div style={style.totalWrap}>
                <div style={style.secondWrap}>
                    <p><img src={logo} style={style.image}/></p>
                    <div style={style.inputWrap}>
                        <input className="lg_input" type='text' placeholder='아이디/ID'/>
                        <input className="lg_input" type='password' placeholder='비밀번호/PASSWORD'/>
                    </div>
                    <p><button className="lg_btn">로그인/LOG IN</button></p>
                    <p style={{alignSelf: 'flex-start', marginLeft: '1rem'}}><input type='checkbox'/>로그인 상태 유지</p>
                    <div>
                        <span style={style.span}>아이디 찾기</span>
                        <span>｜</span>
                        <span style={style.span}>비밀번호 찾기</span>
                        <span>｜</span>
                        <span style={style.span}>회원가입</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;