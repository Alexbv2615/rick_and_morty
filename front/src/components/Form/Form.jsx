import styles from './Form.module.css';
import { useState } from 'react';
import validation from './validation';

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
        setUserData({
            username: '',
            password: '',
        });
    }

    return(
        <form className={styles.form}>
            <h1>Welcome to my Rick and Morty app 🚀</h1>
            <div>
                <label htmlFor="username">Username 😺</label>
                <input className={errors.username ? styles.inputError : styles.inputNormal} type="text" name='username' value={userData.username} autoComplete='off' onChange={handleInputChange} />
                {errors.username && <p className={styles.error}>{errors.username}</p>}
            </div>
            <div>
                <label htmlFor="password">Password 🤐</label>
                <input className={errors.password ? styles.inputError : styles.inputNormal} type="password" name='password' value={userData.password} onChange={handleInputChange} />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <div>
                <button onClick={handleSubmit}>Login 😎</button>
            </div>
        </form>
    )
}

export default Form;