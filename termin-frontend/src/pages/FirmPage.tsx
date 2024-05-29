import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Firm } from '../models/Firm';
import BookingModal from '../components/booking/BookingModal';
import ProductList from '../components/products/ProductList';
import JobPostingList from '../components/jobPostings/JobPostingList';

const FirmPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [firm, setFirm] = useState<Firm | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const fetchFirm = async () => {
      const response = await axios.get(`/api/firm/${id}`);
      setFirm(response.data);
    };
    fetchFirm();
  }, [id]);

  if (!firm) return <div>Loading...</div>;

  return (
    <div>
      <h1>{firm.name}</h1>
      <div>
        <h2>Firm Details</h2>
        {/* Firma detaylarını burada gösterin */}
      </div>
      <button onClick={() => setShowBookingModal(true)}>Make a Booking</button>
      {showBookingModal && <BookingModal firmId={firm.id} onClose={() => setShowBookingModal(false)} />}
      <ProductList firmId={firm.id} />
      <JobPostingList firmId={firm.id} />
    </div>
  );
};

export default FirmPage;