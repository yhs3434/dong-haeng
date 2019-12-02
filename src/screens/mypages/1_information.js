import React, { Component } from 'react';

export default class Information extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>이름</td>
                        <td>김제성</td>
                    </tr>
                    <tr>
                        <td>생년월일</td>
                        <td><input type='date'/></td>
                    </tr>
                    <tr>
                        <td>지역 설정</td>
                        <td>
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
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td>휴대전화</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>이메일</td>
                    </tr>
                </table>
            </div>
        )
    }
}