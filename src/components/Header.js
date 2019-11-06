import React, {Component} from 'react';
import {useHistory, withRouter} from 'react-router-dom';

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
            }
        }
        return(
            <div style={style.wrap}>
                <section style={style.box}>

                </section>
                <section style={style.box}>
                    <h1><span onClick={()=>(this.mainLogoClicked())}>동행</span></h1>
                </section>
                <section style={style.box}>
                    <button onClick={()=>(this.myPageClicked())}>마이 페이지</button>
                    <button onClick={()=>(this.serviceCenterClicked())}>고객 센터</button>
                </section>
            </div>
        )
    }
}

export default withRouter(Header);