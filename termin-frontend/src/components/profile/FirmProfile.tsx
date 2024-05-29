import React from 'react';
import ProductList from '../products/ProductList';
import JobPostingList from '../jobPostings/JobPostingList';

const FirmProfile: React.FC = () => {
  const firmId = 'some-firm-id'; // Bu, gerçekte oturum açmış firmanın ID'si olacak

  return (
    <div>
      <h1>Firm Profile</h1>
      {/* Firma bilgileri ve randevu yönetimi burada olacak */}
      <div>
        <h2>Firm Details</h2>
        {/* Firma bilgilerini burada gösterin */}
      </div>
      <ProductList firmId={firmId} />
      <JobPostingList firmId={firmId} />
    </div>
  );
};

export default FirmProfile;