import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import NoteList from './NoteList';
import Login from './Login';

const AuthenticatedApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, setCookie] = useCookies(['sessionid']);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('/api/user/', {
          headers: {
            'X-CSRFToken': cookies.csrftoken,
          },
        });
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuthentication();
  }, [cookies]);

  return isAuthenticated ? <NoteList /> : <Login />;
};

export default AuthenticatedApp;