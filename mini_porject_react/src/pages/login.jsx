import { useNavigate } from 'react-router-dom'
import '../style/Login.scss'
import { useEmailAuth } from '../../supabase/auth/useEmail.auth'
import { useState } from 'react'
import InputField from '../component/InputField';

export default function Login(){
    const navigate = useNavigate()
    const {login} = useEmailAuth()

    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState({});

    const validate = () => {
    const newError = {};

    if (!/\S+@\S+\.\S+/.test(form.email)) {
        newError.email = '이메일 형식을 확인해주세요.';
    }

    if (form.password.length < 8) {
        newError.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    setError(newError);
    return Object.keys(newError).length === 0;
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const { error } = await login({
        email: form.email,
        password: form.password
    });

    if (error) {
        alert('로그인 실패: ' + error.message);
    } else {
        alert('로그인 성공!');
        navigate('/');
    }
    };

    return(
        <div className="login_container">
            <form className='login_form' onSubmit={handleSubmit}>
                <h1 className='login_header'>로그인</h1>

                <InputField
                    label="이메일"
                    id="login_email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    error={error.email}
                    placeholder="이메일 입력"
                    inputClassName="login_input"
                />

                <InputField
                    label="비밀번호"
                    id="login_password"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    error={error.password}
                    placeholder="비밀번호 입력"
                    inputClassName="login_input"
                />
                
                
                <button className='login_button'
                onClick={() => navigate('/')}>로그인</button>
            </form>
            <button 
            className='join_button'
            onClick={() => navigate('/signup')}>회원가입</button>
        </div>
    )
}