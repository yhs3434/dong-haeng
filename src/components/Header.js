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
                width: '300px',
                justifyContent: 'center'
            },
            img: {
                width: '80px',
                height: '50px'
            }
        }
        return(
            <div style={style.wrap} >
                <section style={style.box} onClick={()=>(this.mainLogoClicked())}>
                    <img src={logo} style={style.img} />
                </section>
                <section style={style.box}>
                    <h1></h1>
                </section>
                <section style={style.box}>
                    <button onClick={()=>(this.myPageClicked())}>마이 페이지</button>
                    <button onClick={()=>(this.serviceCenterClicked())}>고객 센터</button>
                    <button>긴급전화 119</button>
                </section>
            </div>
        )
    }
}

export default withRouter(Header);