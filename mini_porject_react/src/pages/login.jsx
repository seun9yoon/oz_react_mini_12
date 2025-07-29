import { useNavigate } from 'react-router-dom'
import '../style/Login.scss'

export default function Login(){
    const navigate = useNavigate()

    return(
        <div className="login_container">
            <form className='login_form' action="">
                <h1 className='login_header'>로그인</h1>
                <input className='login_input' type="text" placeholder="ID"/>
                <input className='login_input' type="password" placeholder="PW"/>
                <button className='login_button'>로그인</button>
            </form>
            <button 
            className='join_button'
            onClick={() => navigate('/join')}>회원가입</button>
        </div>
    )
}