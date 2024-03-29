import React, { useState } from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Signup+Login/Signup';
import Handleliste from '../components/ShopList/ShopList';
import Login from './Signup+Login/Login';
import Privacy from './Signup+Login/Privacy';
import ForgotPW from './Signup+Login/ForgotPW';
import Lost from '../components/Lost/Lost';
import PrivateRoute from './PrivateRoute';
import Profile from './Profile/Profile';
import UpdateProfile from './Profile/UpdateProfile';
import Fridge from './Fridge/Fridge';
import ToDoList from './ToDoList/ToDoList';
import NavBar from './NavBar/NavBar';
import Groups from '../components/Groups/Groups'
import GroupDetail from '../components/GroupDetail/GroupDetail'
import Invitations from '../components/Invitations/Invitations'
import './globals.css'
import CurrentGroup from './CurrentGroup/CurrentGroup'; 

import LogRocket from 'logrocket';
LogRocket.init('b7kfld/hamle');

export default function App() {

  const [groupID, setGroupID] = useState('')

  return (
    <Router>
      <section>
        <AuthProvider>

          <div className="globalBox">
            <link rel="manifest" href="../build/manifest.json" />
            <Routes>
              <Route exact path='/shoplist' element={
                <PrivateRoute>
                  <CurrentGroup groupID={groupID} setGroupID={setGroupID} />
                  <Handleliste groupID={groupID} />
                  <NavBar />
                </PrivateRoute>
              } />
              <Route exact path='/fridge' element={
                <PrivateRoute>
                  <CurrentGroup groupID={groupID} setGroupID={setGroupID} />
                  <Fridge groupID={groupID} />
                  <NavBar />
                </PrivateRoute>
              } />
              <Route exact path='/profile' element={
                <PrivateRoute>
                  <Profile />
                  <NavBar />
                </PrivateRoute>
              } />
              <Route exact path='/profile/update-profile' element={
                <PrivateRoute>
                  <UpdateProfile />
                  <NavBar />
                </PrivateRoute>
              } />
              <Route exact path='/profile/invitations' element={
                <PrivateRoute>
                  <Invitations />
                  <NavBar />
                </PrivateRoute>
              } />
              
              <Route exact path='/profile/groups' element={
                <PrivateRoute>
                  <Groups />
                  <NavBar />
                </PrivateRoute>
              } />

             <Route exact path='/todo' element={
                <PrivateRoute>
                  <CurrentGroup groupID={groupID} setGroupID={setGroupID} />
                  <ToDoList groupID={groupID}/>
                  <NavBar />
                </PrivateRoute>
              } />
              
              <Route path='profile/groups/:groupID' element={
                <PrivateRoute>
                  <GroupDetail />
                  <NavBar />
                </PrivateRoute>
              } />

              <Route path="/privacy_policy" element={<Privacy />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPW />} />
              <Route exact path="/" element={<Login />} />
              <Route path="/*" element={<Lost />} />
            </Routes>
          </div>
        </AuthProvider>
      </section>
    </Router>

  );
}

