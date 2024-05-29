// pages/NotificationPage.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NotificationComponent from '../components/notifications/NotificationComponent';

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState([]);
  const userId = '12321'
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`/api/notifications/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };
    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notification Page</h1>
      <NotificationComponent notifications={notifications} />
    </div>
  );
};

export default NotificationPage;