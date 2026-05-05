import { createFileRoute } from '@tanstack/react-router'
import { use, useEffect, useState } from 'react';
import UserCard from '../components/UserCard.jsx';

export const Route = createFileRoute('/users')({
  component: RouteComponent,
})

function RouteComponent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/randomusers');
        const data = await response.json();
        const userData = data.data.data;
        console.log('Correct data:', userData);
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div>
      {loading && <div className="loading">Thamba...</div>}
      <h1>Users</h1>
      <div className="users">
        {users && users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
