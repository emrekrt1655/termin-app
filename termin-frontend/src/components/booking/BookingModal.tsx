import React, { useState } from 'react';
import axios from 'axios';

const BookingModal: React.FC<{ firmId: string; onClose: () => void }> = ({ firmId, onClose }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [issue, setIssue] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('date', date);
    formData.append('issue', issue);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.post(`/api/booking/${firmId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onClose();
    } catch (error) {
      console.error('Booking error:', error);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Issue</label>
          <textarea value={issue} onChange={(e) => setIssue(e.target.value)} />
        </div>
        <div>
          <label>File</label>
          <input type="file" onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)} />
        </div>
        <button type="submit">Book Appointment</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default BookingModal;