import React, { useState } from "react";
import { API_URL } from "../config";
import SignUp from "./SignUp";
import Bird from '../images/Bird';
import MagnifyingGlass from '../images/MagnifyingGlass';
import People from '../images/People';
import LoginBubble from '../images/LoginBubble';
import GithubIcon from '../images/GithubIcon';
import astronaut from '../images/astronaut.png';



const Login = () => {
    const [signUpModal, setSignUpModal] = useState(false);
    const [antiModal, setAntiModal] = useState("login-block")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const showSignUpModal = () => {
        setAntiModal("hide-div login-block")
        setSignUpModal(true)
    };
    const hideSignUpModal = () => {
        setAntiModal("login-block")
        setSignUpModal(false)
    };

    const updateEmail = (e) => setEmail(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    const handleSubmit = async () => {
        const response = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: `${email}`, password: `${password}` }),
        });

        if (response.ok) {
            console.log("inside tryLogin: Success");
        } else {
            console.log("inside tryLogin: Response failure");
        }
        const res = await response.json()
        if (res.auth_token != undefined) {
            window.localStorage.setItem('auth_token', res.auth_token)
            window.location.reload()
        }

    };

    const loginDemoUser = async () => {
        const demoEmail = "lisa@aa.com";
        const demoPassword = "password"
        let speed=70, i=1, k=0;

        const ghostWriteEmail = () => {
            if (i <= demoEmail.length) {
                let text = demoEmail.slice(0,i);
                setEmail(text);
                i++;
                setTimeout(ghostWriteEmail, speed);
            }
        }
        const ghostWritePassword = () => {
            if (k <= demoPassword.length) {
                let text = demoPassword.slice(0,k);
                setPassword(text);
                k++;
                setTimeout(ghostWritePassword, speed);
            }
        }
        ghostWriteEmail();
        setTimeout(ghostWritePassword, speed*demoEmail.length);
        const demoLogin = async () => {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: `${demoEmail}`, password: `${demoPassword}` }),
            });
            const res = await response.json()
            if (res.auth_token != undefined) {
                window.localStorage.setItem('auth_token', res.auth_token)
                window.location.reload()
            }
        }
        setTimeout(demoLogin, 1500);
    }


    return (
        <div className='login-container'>
            <div className="login-main--container">
                <div className="login-main__right">
                    <div className={"astronaut"}></div>
                    <img className={"astronaut"} src={astronaut} alt={""} ></img>
                    <input className="login-input-1" type="text" placeholder="Email" value={email} onChange={updateEmail} />
                    <input className="login-input-2" type="password" placeholder="Password" value={password} onChange={updatePassword} /> <SignUpModal show={signUpModal} handleClose={hideSignUpModal} />
                    <div className="login-bar__button--container" onClick={handleSubmit}>
                        <span>Log in</span>
                        <img className={"rocket-pointer"} src="https://staticdelivery.nexusmods.com/mods/3037/images/thumbnails/42/42-1575412019-472511860.png" title="" alt="" ></img>
                    </div>
                </div>
                <div className="login-block__h5">
                    <span>Welcome to Skywalker</span>
                </div>
                <div className="login-block__signup--button" onClick={showSignUpModal}>
                    <span>Sign up</span>
                </div>
                <div className="login-block__demo--container" onClick={loginDemoUser}>
                    <span>Log in as Demo User</span>
                </div>
            </div>
            <div className="login-footer">
                <div className="login-footer__text">
                    <span></span>
                </div>
                
                <div className="login-footer__creditBox">
                    <span>Casey Riley</span>
                    <div className="login-footer__creditBox--links">
                        <a href="mailto:innerforest7@gmail.com">
                            <img alt={""} src="https://img.icons8.com/doodle/48/000000/new-post.png" />
                        </a>
                        <a href="https://github.com/caseyriley">
                            <GithubIcon />
                        </a>
                        <a href="https://www.linkedin.com/in/casey-riley-3396231a1/">
                            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" />
                        </a>
                        <a href="https://angel.co/u/casey-riley-1">
                            <img src="https://img.icons8.com/color/48/000000/angelist.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const SignUpModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal-showing" : "modal-hiding";

    return (
        <>
            <div className={showHideClassName}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="signup-content--container">
                        <div className="signup-content">
                            <SignUp handleClose={handleClose} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




