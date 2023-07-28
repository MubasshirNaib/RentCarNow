// export default Layout
import React, { Fragment } from 'react';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import { useContext } from 'react';
import loginContext from '../../context/loginContext';

const Layout = () => {

    const b = useContext(loginContext);


    return (
        
        <Fragment>
            <Header />
            <div>
                <Routers />
            </div>
            <Footer />
        </Fragment>
        // <Login1/>
    );
};

export default Layout;
