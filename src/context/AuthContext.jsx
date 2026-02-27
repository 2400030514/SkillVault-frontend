import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { username, role }
  const [role, setRole] = useState(null);
  const [users, setUsers] = useState([]); // registered accounts

  useEffect(() => {
    // try to read auth from local storage
    const storedAuth = JSON.parse(localStorage.getItem('auth'));
    if (storedAuth) {
      // storedAuth.user may be string from old version or object
      if (typeof storedAuth.user === 'string') {
        setUser({ username: storedAuth.user, role: storedAuth.role });
      } else {
        setUser(storedAuth.user);
      }
      setRole(storedAuth.role);
    }

    // load stored users list
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  const persistUsers = updated => {
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  const updateUser = (username, updates) => {
    const updated = users.map(u => (u.username === username ? { ...u, ...updates } : u));
    persistUsers(updated);
    return updated;
  };

  const register = (username, password) => {
    // check for existing username
    if (users.some(u => u.username === username)) {
      return false;
    }
    const updated = [...users, { username, password, active: true }];
    persistUsers(updated);
    return true;
  };

  const login = (username, password) => {
    // strict admin credentials (case-sensitive)
    if (username === 'Admin' && password === 'Hasini@123') {
      const userObj = { username, role: 'admin' };
      setUser(userObj);
      setRole('admin');
      localStorage.setItem('auth', JSON.stringify({ user: userObj, role: 'admin' }));
      return true;
    }

    // ensure we check the persisted users list in localStorage in case
    // the in-memory `users` hasn't been populated yet
    const storedUsers = JSON.parse(localStorage.getItem('users')) || users || [];
    const match = storedUsers.find(u => u.username === username && u.password === password);
    if (match) {
      if (match.active === false) {
        // account deactivated
        return { success: false, reason: 'inactive' };
      }
      const userObj = { username, role: 'user' };
      setUser(userObj);
      setRole('user');
      localStorage.setItem('auth', JSON.stringify({ user: userObj, role: 'user' }));
      return { success: true };
    }

    return { success: false, reason: 'invalid' };
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ user, role, users, register, login, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};