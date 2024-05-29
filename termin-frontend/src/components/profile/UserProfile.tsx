import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface User {
  id: string;
  photo: string;
  name: string;
  surname: string;
  age: number;
  carModel: string;
  userNumber: string;
  appointments: Appointment[];
  favoriteFirms: Firm[];
}

interface Appointment {
  id: string;
  date: string;
  details: string;
}

interface Firm {
  id: string;
  name: string;
}

interface FormDataUser extends Omit<User, 'photo'> {
  photo?: File | string;
}

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<FormDataUser>>({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        photo: e.target.files[0],
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined) {
        formDataToSubmit.append(key, value as Blob | string);
      }
    });

    try {
      await axios.put('/api/user', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsEditing(false);
      const response = await axios.get('/api/user');
      setUser(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img src={user.photo} alt="User" width={150} height={150} />
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Photo</label>
            <input type="file" name="photo" onChange={handleFileChange} />
          </div>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Surname</label>
            <input type="text" name="surname" value={formData.surname || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Age</label>
            <input type="number" name="age" value={formData.age || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Car Model</label>
            <input type="text" name="carModel" value={formData.carModel || ''} onChange={handleChange} />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>User Number: {user.userNumber}</p>
          <p>Name: {user.name}</p>
          <p>Surname: {user.surname}</p>
          <p>Age: {user.age}</p>
          <p>Car Model: {user.carModel}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <h3>Appointments</h3>
      <ul>
        {user.appointments?.map((appointment) => (
          <li key={appointment.id}>{appointment.date} - {appointment.details}</li>
        )) || <li>No appointments found.</li>}
      </ul>
      <h3>Favorite Firms</h3>
      <ul>
        {user.favoriteFirms?.map((firm) => (
          <li key={firm.id}>{firm.name}</li>
        )) || <li>No favorite firms found.</li>}
      </ul>
    </div>
  );
};

export default UserProfile;
