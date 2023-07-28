/* eslint-disable max-lines */
import Layout from './components/Layout/Layout';
import LoginState from './context/LoginState';

const App = () => {
    return (
        <LoginState>
            <Layout />
        </LoginState>
    );
};

export default App;
