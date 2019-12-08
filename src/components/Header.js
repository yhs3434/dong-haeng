import React, {Component} from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import logo from '../images/logo_donghaeng.png';

class Header extends Component {
    myPageClicked = () => {
        this.props.history.push("/mypage")
    }

    serviceCenterClicked = () => {
        this.props.history.push("/servicecenter")
    }

    mainLogoClicked = () => {
        this.props.history.push("/search")
    }

    render() {
        const style = {
            wrap : {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                boxShadow: "1px 1px 2px #aaaaaa",
            },
            box: {
                display: 'flex',
                justifyContent: 'center'
            },
            img: {
                width: '80px',
                height: '50px'
            },
            buttonEmenrgency: {
                backgroundColor: '#F4AC33',
                color: 'white',
                padding: '0.5rem',
                margin: '0.5rem',
                boxShadow: 'gray 1px 1px 5px',
                borderRadius: '10%'
            },
            buttonRest: {
                backgroundColor: 'transparent',
                color: 'black',
                padding: '0.5rem',
                margin: '0.5rem',
            }
        }
        return(
            <div style={style.wrap} >
                <section style={style.box} onClick={()=>(this.mainLogoClicked())}>
                    <a href="#"><img src={logo} style={style.img} /></a>
                </section>
                <section style={style.box}>
                    <h1></h1>
                </section>
                <section style={style.box}>
                    <button onClick={()=>(this.myPageClicked())} style={style.buttonRest}>마이 페이지</button>
                    <button onClick={()=>(this.serviceCenterClicked())} style={style.buttonRest}>고객 센터</button>
                    <button onClick={()=>(alert('준비중입니다'))} style={style.buttonEmenrgency}>긴급전화 119</button>
                </section>
            </div>
        )
    }
}

export default withRouter(Header);