import { useState } from 'react'
import { useEmailAuth } from '../../supabase/auth/useEmail.auth'
import '../style/Signup.scss'
import { useNavigate } from 'react-router-dom'
import InputField from '../component/InputField';

export default function Signup(){
    const navigate = useNavigate()
    const { signUp } = useEmailAuth()
    
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: ''});
    const [error, setError] = useState({});

    const validate = () => {
    const newError = {};
    if (!/^[A-Za-z가-힣]{2,8}$/.test(form.name)) {
        newError.name = '이름은 2~8자의 한글, 영어로 입력하세요.';
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
        newError.email = '올바른 이메일 형식입니다.';
    }
    if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(form.password)) {
        newError.password = '비밀번호는 영문+숫자 조합, 8자 이상입니다.';
    }
    if (form.password !== form.confirm) {
        newError.confirm = '비밀번호가 일치하지 않습니다.';
    }
    setError(newError);
    return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { error } = await signUp({ email: form.email, password: form.password });

    if (error) {
        alert("회원가입 실패: " + error.message);
    } else {
        navigate('/login');
    }
    };

    return(
        <div className="signup_container">
            <form className='signup_form' onSubmit={handleSubmit}>
                <h1 className='signup_header'>회원가입</h1>

                <InputField
                    label="이메일"
                    id="user_email"
                    type="email" 
                    value={form.email}
                    onChange={(e) => setForm({...form, email: e.target.value})}
                    error={error.email}
                    placeholder='Email'
                    inputClassName="signup_input"
                />
                <InputField
                    label="이름"
                    id="user_name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    error={error.name}
                    placeholder='성함을 입력해주세요'
                    inputClassName="signup_input"
                />
                <InputField
                    label="비밀번호"
                    id="user_pw"
                    type= "password"
                    value={form.password}
                    onChange={(e) => setForm({...form, password: e.target.value})}
                    error={error.password}
                    placeholder='비밀번호를 입력해주세요'
                    inputClassName="signup_input"
                />
                <InputField
                    label="비밀번호 확인"
                    id="user_pw_confirm"
                    type= "password"
                    value={form.confirm}
                    onChange={(e) => setForm({...form, confirm: e.target.value})}
                    error={error.confirm}
                    placeholder='비밀번호 확인'
                    inputClassName="signup_input"
                />

                <button className='signup_button'>가입하기</button>
            </form>
        </div>
    )
}