import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle';
import Navbar1 from '../components/UI/Navbar1';
import Admin1 from '../components/UI/Admin1';
const Admin = () => {
  return (
    <PageTitle title="Admin">  
        <Navbar1/>
        <Admin1/>
    </PageTitle>
  );
};

export default Admin