import React, { Component } from 'react';

export default class Information extends Component {
    render() {
        const style = {
            wrap: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            },
            table: {
                borderSpacing: '2rem'
            },
            addArea: {
                padding: '0.3rem',
                backgroundColor: 'rgb(157, 195, 233)',
                color: '#0C335A'
            }
        }

        return (
            <div style={style.wrap}>
                <table style={style.table}>
                    <tr>
                        <td>이름</td>
                        <td>김제성</td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td colSapn='2'><input type='date'/></td>
                    </tr>
                    <tr>
                        <td>지역 설정</td>
                        <td colSpan='2'>
                            <select>
                                <option>관심지1</option>
                                <option>관심지2</option>
                                <option>관심지3</option>
                            </select>
                            <select>
                                <option>서울시</option>
                                <option>용인시</option>
                                <option>성남시</option>
                            </select>
                            <select>
                                <option>강남구</option>
                                <option>강북구</option>
                                <option>수지구</option>
                            </select>
                            <select>
                                <option>삼성2동</option>
                                <option>관심지2</option>
                                <option>관심지3</option>
                            </select>
                        </td>
                        <td>
                            <button style={style.addArea}>+ 지역추가</button>
                        </td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td>휴대전화</td>
                        <td>010-9099-****</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>이메일</td>
                        <td>yoonhs3434@naver.com</td>
                    </tr>
                </table>
                <button className="if_btn" style={{margin: '2rem'}}>회원 정보 저장</button>
            </div>
        )
    }
}