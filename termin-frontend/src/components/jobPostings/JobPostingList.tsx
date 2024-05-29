import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { JobPosting } from '../../models/JobPosting';

interface JobPostingListProps {
  firmId: string;
}

const JobPostingList: React.FC<JobPostingListProps> = ({ firmId }) => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);

  useEffect(() => {
    const fetchJobPostings = async () => {
      try {
        const response = await axios.get(`/api/jobPostings?firmId=${firmId}`);
        if (Array.isArray(response.data)) {
          setJobPostings(response.data);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (error) {
        console.error('Error fetching job postings:', error);
        // Handle error, e.g., setJobPostings([])
      }
    };
    fetchJobPostings();
  }, [firmId]);

  return (
    <div>
      <h2>Job Postings</h2>
      <ul>
        {jobPostings.map((job) => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>{job.requirements}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPostingList;
