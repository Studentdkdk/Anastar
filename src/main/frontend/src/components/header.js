import React, {Component} from "react";

export class Header extends Component{
    static displayName = Header.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">
                <div className="main_nav">
                    <div className="max1200 clearfix">
                        <div id="main_logo"><a href="/index"><img
                            src="/resources/images/logo.jpg" alt="로고이미지"/></a></div>
                        <div className="nav">
                            <ul className="clearfix">
                                <li>
                                    <a href="/intro/main">아나스타 소개</a>
                                </li>
                                <li>
                                    <a href="/edu/guide">교육안내</a>
                                </li>
                                <li>
                                    <a href="/board/passer/list">합격자</a>
                                </li>
                                <li>
                                    <a href="/board/community/list">아나스타 소식</a>
                                </li>
                                <li><a href="/board/notice/list">자료실</a></li>
                                <c:choose>
                                    <c:when test="${isLogin eq 1}">
                                        <sec:authorize access="hasRole('ROLE_USER')">
                                            <li><a href="${contextPath }/user/mypage">마이페이지</a></li>
                                        </sec:authorize>
                                    </c:when>
                                    <c:otherwise>
                                        <li><a href="${contextPath }/join">회원가입</a></li>
                                    </c:otherwise>
                                </c:choose>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}