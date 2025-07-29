import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../Hooks/useDebounce";
import '../style/NavBar.scss'

export default function Navbar(){
    const navigate = useNavigate()
    const location = useLocation();
    const [secondInput, setSecondInput] = useState(false)
    const [movieName, setMovieName] =  useState("");
    const debounce = useDebounce(movieName, 1000);
    
    useEffect(() => {
        //디테일 페이지로 안들어가지는 문제 발생. 
        //검색어를 입력 후 디테일 페이지를 누르면 debounce.length > 0로 인해서 계속해서
        //navigate(`search?movie=${debounce}`);가 덮어씌이게됨. 콘솔로그로 찍히는 것은 확인.
        //아래 코드를 통해 디테일 페이지 진입시 리턴을 통해 코드를 빠져나감
        //location -> 현재 브라우저의 정보 / pathname -> ?이전까지의 경로만 문자열로
        if (location.pathname.startsWith("/detail")) return;
        if (location.pathname.startsWith("/login")) return;
        if (location.pathname.startsWith("/join")) return;
        if(debounce.length > 0){
            navigate(`search?movie=${debounce}`);
        }else{
            navigate(`/`);
        }
    }, [debounce, navigate])

    return(
    <nav className="nav">
        <div className="nav_container">
            <Link to={"/"} className="logo">OZ무비</Link>
            <input 
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            className="nav_input"
            placeholder="영화 제목을 입력하세요" />
            <div className="nav_button">
                <div className="mobile_input"
                onClick={() => setSecondInput(prev => !prev)}>🔎</div>
                <Link to={'/login'} className="nav_login">로그인</Link>
                <Link to={'/join'} className="nav_join">회원가입</Link>
            </div>
        </div>
        {/* 돋보기 클릭시 검색창 활성화 */}
        <div className="second_input_container">
            {secondInput ? 
            <input 
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
            className="second_input"
            placeholder="영화 제목을 입력하세요" /> : null}
        </div>
    </nav>
    )
}