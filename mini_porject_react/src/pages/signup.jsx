import '../style/Signup.scss'

export default function Signup(){

    return(
        <div className="signup_container">
            <form className='signup_form' action="">
                <h1 className='signup_header'>회원가입</h1>
                <label htmlFor='user_email'>이메일</label>
                <input className='signup_input' id='user_email' type="email" placeholder="Email" />
                <div>이메일 형식으로 입력해주세요</div>
                <label htmlFor='user_name'>이름</label>
                <input className='signup_input' id ='user_name'placeholder="이름을 입력해주세요" />
                <div>이름을 입력해주세요</div>
                <label htmlFor='user_pw'>비밀번호</label>
                <input className='signup_input' id='user_pw' type="password" placeholder="비밀번호를 입력해주세요" />
                <div>필수 항목입니다.</div>
                <label htmlFor='user_pw_confirm'>비밀번호 확인</label>
                <input className='signup_input' id='user_pw_confirm' type="password" placeholder="PW확인"/>
                <div>비밀번호가 일치하지않습니다.</div>
                <button className='signup_button'>가입하기</button>
            </form>
        </div>
    )
}