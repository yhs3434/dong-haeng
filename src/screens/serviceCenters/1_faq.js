import React, {Component} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreRounded';
import Icon from '@material-ui/core/Icon';

export default class FaqService extends Component {
    render() {
        const style = {
            p: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '1rem'
            },
            expand: {
                backgroundColor: '#0C335A',
                color: 'white',
                borderRadius: '50%'
            }
        }
        return(
            <div>
                <h2>자주 사용되는 도움말</h2>
                <hr style={{borderColor: '#0C335A'}}/>
                <p style={style.p}><span>동행 지도 사용법</span><a href="#"><Icon style={style.expand} component={ExpandMoreIcon}/></a></p>
                <hr style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}/>
                <p style={style.p}><span>길찾기 정보 및 경로 보기</span><a href="#"><Icon style={style.expand} component={ExpandMoreIcon}/></a></p>
                <hr style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}/>
                <p style={style.p}><span>지역 다운로드 및 네비게이션</span><a href="#"><Icon style={style.expand} component={ExpandMoreIcon}/></a></p>
                <hr style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}/>
                <p style={style.p}><span>내 위치 확인하고 정확도 개선하기</span><a href="#"><Icon style={style.expand} component={ExpandMoreIcon}/></a></p>
                <hr style={{marginLeft: '0.5rem', marginRight: '0.5rem'}}/>
                <p style={style.p}><span>휴대전화, 자동 또는 태블릿으로 길찾기 보내기</span><a href="#"><Icon style={style.expand} component={ExpandMoreIcon}/></a></p>
            </div>
        )
    }
}