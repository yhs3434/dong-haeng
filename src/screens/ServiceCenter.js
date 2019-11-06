import React, {Component} from 'react';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
            }
        }
        return(
            <div style={style.wrap}>
                <div style={style.box}>
                    <p>자주 사용되는 도움말</p>
                    <ArrowDownIcon />
                </div>
                <div style={style.box}>
                    <p>지도 검색</p>
                    <ArrowDownIcon />
                </div>
                <div style={style.box}>
                    <p>콜택시 이용방법</p>
                    <ArrowDownIcon />
                </div>
                <div style={style.box}>
                    <p>장소 추가 또는 수정</p>
                    <ArrowDownIcon />
                </div>
                <div style={style.box}>
                    <p>개인정보 보호, 접근성 알아보기</p>
                    <ArrowDownIcon />
                </div>
                <div style={style.box}>
                    <p>문제 해결 또는 의견 보내기</p>
                    <ArrowDownIcon />
                </div>
            </div>
        )
    }
}

export default ServiceCenter;