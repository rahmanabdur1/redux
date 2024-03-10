
import React, { } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Main from './layout/Main';
import Dashboard from './layout/Dashboard';
import UserLists from './Pages/Dashboard/UserLists/UserLists';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import SelectePlan from './Pages/SelectePlan/SelectePlan';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home />} />
        <Route path='/register' element={<RegisterPage/>} />
        {/* <Route path='/userlist' element={<UserLists/>}/> */}
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register/selecte-plan/' element={<SelectePlan/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
      </Route>
    </Routes>
  );
}

export default App;
