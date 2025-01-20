import { useState } from 'react';
import './logInForm.css';

export default function LogInForm() {
    const [activeForm, setActiveForm] = useState('login'); // 'login' or 'signup'

    const handleToggle = (form) => {
        setActiveForm(form);
    };

    return (
        <div className="logInFormContainer">
            <div className="logInFormHeader">
                <a
                    id="loginToggleBtn"
                    className={activeForm === 'login' ? 'active' : ''}
                    onClick={() => handleToggle('login')}
                >
                    ورود
                </a>
                <span>||</span>
                <a
                    id="signUpToggleBtn"
                    className={activeForm === 'signup' ? 'active' : ''}
                    onClick={() => handleToggle('signup')}
                >
                    ثبت نام
                </a>
            </div>

            {/* Log In Form */}
            <div
                className="logInEntery"
                style={{ display: activeForm === 'login' ? 'block' : 'none' }}
            >
                <div className="logInEntryInputs">
                    <label htmlFor="username">نام کاربری</label>
                    <input type="text" id="username" placeholder="نام کاربری" />

                    <label htmlFor="password">رمز عبور</label>
                    <input type="password" id="password" placeholder="رمز عبور" />
                </div>
                <button type="submit">ورود</button>
            </div>

            {/* Sign Up Form */}
            <div
                className="signUpForm"
                style={{ display: activeForm === 'signup' ? 'block' : 'none' }}
            >
                <div className="logInEntryInputs">
                    <label htmlFor="firstName">نام</label>
                    <input type="text" id="firstName" placeholder="نام" />

                    <label htmlFor="lastName">نام خانوادگی</label>
                    <input type="text" id="lastName" placeholder="نام خانوادگی" />

                    <label htmlFor="username">نام کاربری</label>
                    <input type="text" id="username" placeholder="نام کاربری" />

                    <label htmlFor="password">رمز عبور</label>
                    <input type="password" id="password" placeholder="رمز عبور" />
                </div>
                <button type="submit">ثبت نام</button>
            </div>
        </div>
    );
}
