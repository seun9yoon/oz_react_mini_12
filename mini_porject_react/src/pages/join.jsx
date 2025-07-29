import '../style/Join.scss'

export default function Join(){

    return(
        <div className="join_container">
            <form className='join_form' action="">
                <h1 className='join_header'>회원가입</h1>
                <label htmlFor='user_name'>이름</label>
                <input className='join_input' id ='user_name'placeholder="이름을 입력해주세요" />
                <label htmlFor="user_birth">생년월일</label>
                <input className='join_input' id='user_birth' type="date" />
                <label htmlFor='user_id'>아이디</label>
                <input className='join_input' id='user_id' type="text" placeholder="ID" />
                <label htmlFor='user_pw'>비밀번호</label>
                <input className='join_input' id='user_pw' type="password" placeholder="비밀번호를 입력해주세요" />
                <label htmlFor='user_pw_confirm'>비밀번호 확인</label>
                <input className='join_input' id='user_pw_confirm' type="password" placeholder="PW확인"/>
                <button className='join_button'>가입하기</button>
            </form>
        </div>
    )
}