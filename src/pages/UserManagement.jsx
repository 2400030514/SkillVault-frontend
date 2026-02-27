import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserManagement = () => {
  const { users = [], updateUser } = useContext(AuthContext);

  const toggleActive = (u) => {
    const updated = updateUser(u.username, { active: !(u.active !== false) });
    alert(`${u.username} is now ${updated.find(x=>x.username===u.username).active ? 'active' : 'deactivated'}`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent drop-shadow-lg">User Management</h1>
      <div className="mt-4 space-y-3">
        {users.map(u => (
          <div key={u.username} className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-lg flex items-center justify-between">
            <div>
              <div className="font-medium">{u.username}</div>
              <div className="text-sm text-gray-400">{u.active === false ? 'Deactivated' : 'Active'}</div>
            </div>
            <div>
              <button onClick={() => toggleActive(u)} className="py-1 px-3 rounded bg-gradient-to-r from-cyan-400 to-purple-600 text-white shadow-[0_0_6px_rgba(0,255,255,0.6)] hover:shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                {u.active === false ? 'Activate' : 'Deactivate'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserManagement;
