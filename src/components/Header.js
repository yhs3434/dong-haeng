import React, {Component} from 'react';
import {connect} from 'react-redux';
import {useHistory, withRouter} from 'react-router-dom';
import logo from '../images/logo_donghaeng.png';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {resizing} from '../store/modules/resize';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

class Header extends Component {
    state = {
        mypageAnchor: null,
        menuAnchor: null
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => {
        this.props.resizing(window.innerWidth);
    }

    menuAnchorClicked = (evt) => {
        this.setState({
            menuAnchor: evt.currentTarget
        });
    }

    menuAnchorClose = () => {
        this.setState({
            menuAnchor: null,
        });
    }

    myPageAnchorClicked = (evt) => {
        this.setState({
            mypageAnchor: evt.currentTarget
        })
    }

    myPageAnchorClose = () => {
        this.setState({
            mypageAnchor: null
        })
    }

    loginClicked = () => {
        this.setState({
            mypageAnchor: null
        });
        this.props.history.push("/login");
    }

    myPageClicked = () => {
        this.setState({
            mypageAnchor: null
        });
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
                <section style={this.props.screenWidth<720?{display:'none'}:style.box}>
                    <button onClick={this.myPageAnchorClicked} style={style.buttonRest}>마이 페이지</button>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <button onClick={()=>(this.serviceCenterClicked())} style={style.buttonRest}>고객 센터</button>
                        <Menu open={Boolean(this.state.mypageAnchor)} anchorEl={this.state.mypageAnchor} onClose={this.myPageAnchorClose}>
                            <MenuItem onClick={this.loginClicked}>로그인</MenuItem>
                            <MenuItem onClick={this.myPageClicked}>마이 페이지</MenuItem>
                        </Menu>
                    </div>
                    <button onClick={()=>(alert('준비중입니다'))} style={style.buttonEmenrgency}>긴급전화 119</button>
                </section>
                <section style={this.props.screenWidth<720?{display:'flex'}:{display:'none'}}>
                    <IconButton onClick={this.menuAnchorClicked}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu open={Boolean(this.state.menuAnchor)} anchorEl={this.state.menuAnchor} onClose={this.menuAnchorClose}>
                        <MenuItem>로그인</MenuItem>
                        <MenuItem>마이 페이지</MenuItem>
                        <MenuItem>고객 센터</MenuItem>
                        <MenuItem>긴급전화 119</MenuItem>
                    </Menu>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    screenWidth: state.resize.screenWidth,
});

const mapDispatchToProps = dispatch => ({
    resizing: screenWidth => dispatch(resizing(screenWidth))
});

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(Header));