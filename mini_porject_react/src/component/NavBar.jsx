import { Link } from "react-router-dom";

export default function Navbar(){
    return(
    <nav>
        <div className="flex justify-between p-[8px] text-white bg-[#312A2E]">
            <h1 className="text-[32px] leading-none ">OZ무비</h1>
            <input className="text-black border rounded-[50px] w-[300px] pl-[5px]" />
            <div className="flex gap-[10px]">
                <Link to={'/login'} className="rounded p-[3px] bg-[#6346AE]">로그인</Link>
                <Link to={'/join'} className="rounded p-[3px] bg-[#6346AE]">회원가입</Link>
            </div>
        </div>
    </nav>
    )
}