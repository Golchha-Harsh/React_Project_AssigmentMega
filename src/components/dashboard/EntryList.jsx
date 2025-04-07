// src/components/dashboard/EntryList.js
import React from 'react';
import { Link } from 'react-router-dom';

const EntryList = ({ isLoading, isError, error, entries }) => {
  if (isLoading) {
    return <div>Loading entries...</div>;
  }

  if (isError) {
    return <div className="text-red-500">Error loading entries: {error.message}</div>;
  }

  if (!entries || entries.length === 0) {
    return <p className="text-gray-500">No entries found.</p>;
  }

  return (
    <ul className="list-disc pl-4">
      {entries.map((entry) => (
        <li key={entry.id}>
          <Link to={`/dashboard/details/${entry.id}`} className="text-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded px-2 py-1 ease-in-out ">
            {entry.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EntryList;