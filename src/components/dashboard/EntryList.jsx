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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries.map((entry) => (
        <Link
          key={entry.id}
          to={`/dashboard/details/${entry.id}`}
          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 p-5 hover:border-blue-500 hover:bg-blue-50"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-2">{entry.name}</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Technology:</strong> {entry.technology}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Company:</strong> {entry.company}
          </p>
          <p className="text-sm text-gray-500 truncate">{entry.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default EntryList;
