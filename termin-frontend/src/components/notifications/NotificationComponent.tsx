// components/NotificationComponent.tsx

import React from 'react';

interface Notification {
  id: string;
  message: string;
  read: boolean;
}

interface NotificationProps {
  notifications: Notification[];
}

const NotificationComponent: React.FC<NotificationProps> = ({ notifications }) => {
  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;