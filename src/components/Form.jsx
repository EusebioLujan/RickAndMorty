import React, { useState } from "react";
import styles from "./styles/Form.module.css";
import { validateUsername, validatePassword} from "./validation"


export default function Form(props) {
    const [userData, setUserData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = React.useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({ ...prevState, [name]: value }));
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        const { username, password } = userData;
        const errors = {};
        const isUsernameValid = validateUsername(username);
        const isPasswordValid = validatePassword(password);
        if (!isUsernameValid) {
            errors.username = 'Invalid username no funciono jaja saludos';
        }
        if (!isPasswordValid) {
            errors.password = 'Invalid password';
        }
        setErrors(errors);
        setIsValid(isUsernameValid && isPasswordValid);
        if(isUsernameValid && isPasswordValid) {props.login(userData)}
        
    }

    return (
        <>
            <div className={styles.divgral}>
                <form className={styles.formgral} onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </label>
                    <label>
                        <input type="submit" value="<<LOGIN>>" />
                    </label>
                </form>
            </div>
        </>
    );
}
