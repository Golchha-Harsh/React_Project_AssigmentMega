import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../lib/api";

const EntryDetailsPage = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchEntryDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/entries/${id}`);
      setEntry(response.data);
      setLoading(false);
    } catch (err) {
      setError("failed to load any entriess");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchEntryDetails();
  }, [id]);

  if (loading) {
    return <div className="p-4">loading entry details...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  if (!entry) {
    return <div className="p-4">Entry not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Entry Details</h1>
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-2">{entry.name}</h2>
        <p className="mb-2">
          <strong className="font-semibold">Technology:</strong>{" "}
          {entry.technology}
        </p>
        <p className="mb-2">
          <strong className="font-semibold">Company:</strong> {entry.company}
        </p>
        <p>
          <strong className="font-semibold">Description:</strong>
        </p>
        <p className="text-gray-700">{entry.description}</p>
      </div>
    </div>
  );
};

export default EntryDetailsPage;
