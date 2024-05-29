import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/search/Search';
import Filter from '../components/search/Filter';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Filter />
      <Search />
      <div>
        <Link to="/user-profile">
          <button>User Profile</button>
        </Link>
        <Link to="/firm-profile">
          <button>Firm Profile</button>
        </Link>
        <Link to="/firm/:id">
          <button>Firm Page</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
