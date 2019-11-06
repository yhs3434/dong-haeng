import React, {Component} from 'react';
import ButtonImage1 from '../images/mypage1.png';

class MyPage extends Component {
    render() {
        const style= {
            wrap: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            },
            box: {
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                height: '200px',
                margin: '3rem',
                border: 'thin solid black',
                boxShadow: '1px 2px 5px gray',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3rem'
            },
            image: {
                margin: '3rem'
            }
        }
        return(
            <div style={style.wrap}>
                <div style={style.box}>
                    <p><h4>회원 정보 수정</h4></p>
                    <p>서비스에서 사용하는 기본 정보를 수정합니다.</p>
                </div>
                <div style={style.box}>
                    <p><h4>자주 가는 경로 등록</h4></p>
                    <p>자주가는 경로를 등록시켜 시작 페이지에서부터 바로 경로를
                        찾을 수 있도록 합니다.
                    </p>
                </div>
                <div style={style.box}>
                    <p><h4>최근 경로 보기</h4></p>
                    <p>최근 검색한 모든 경로를 모아서 봅니다.</p>
                </div>
                <div style={style.box}>
                    <p><h4>지도 보기 설정</h4></p>
                    <p>색상과 돋보기 기능의 세부사항을 설정합니다.</p>
                </div>
                <div style={style.box}>
                    <p><h4>검색했던 도움말</h4></p>
                    <p>최근 검색한 모든 도움말을 모아서 봅니다.</p>
                </div>
            </div>
        )
    }
}

export default MyPage;