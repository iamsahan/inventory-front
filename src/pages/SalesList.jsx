// frontend/components/SalesList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesList = () => {
  const [sales, setSales] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSales, setFilteredSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await axios.get('http://localhost:8070/api/pos/sale'); // Replace with your actual backend API endpoint
        setSales(response.data);
      } catch (error) {
        console.error('Error fetching sales:', error);
      }
    };

    fetchSales();
  }, []);

  const handleSearch = () => {
    const filtered = sales.filter(sale => sale.transactionID === searchQuery);
    setFilteredSales(filtered);
  };

  return (
    <div>
      <h1>Sales Records</h1>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by sales ID"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {filteredSales.map((sale, index) => (
          <li key={index}>
            {/* Render sales record details here */}
            <p>Transaction ID: {sale.transactionID}</p>
            <p>Total Amount: ${sale.totalAmount}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesList;
