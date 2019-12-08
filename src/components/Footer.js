import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        const style = {
            wrap: {
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#2D3B44',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                marginTop: '2rem'
            }
        }
        return (
            <div style={style.wrap}>
                <div style={{display:'flex', flexWrap: 'wrap', color: 'white'}}>
                    <span>고객센터</span>
                    <span>｜</span>
                    <span>지도 정보 수정</span>
                    <span>｜</span>
                    <span>신규 장소 등록</span>
                    <span>｜</span>
                    <span>이용약관</span>
                    <span>｜</span>
                    <span>개인정보처리방침</span>
                </div>
            </div>
        )
    }
}