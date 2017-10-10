import * as React from 'react';
import Header from '../../components/header/header';
import { Styles } from './style';
const Home = () => {
    return (
        <div>
            <Header />
            <div className={Styles.loginContainer}>
                <div>Login</div>
                <form className={Styles.formContainer} action="">
                    <input type="text" placeholder={'Username'}/>
                    <input type="text" placeholder={'Password'} />
                </form>
            </div>
        </div>
    )
};

export default Home;