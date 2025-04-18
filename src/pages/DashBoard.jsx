import React, { useState } from "react";
import NewEntryForm from "../components/dashboard/NewEntryForm";
import EntryList from "../components/dashboard/EntryList";
import useAddEntry from "../hooks/useAddEntries";
import useEntries from "../hooks/useEntries";

const DashboardPage = () => {
  //This  state value handles entry form
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  //this line will call useEntries hook to fetch data as we know it is implemented by tanstack so it will
  //give isLoading isError Data error isLoading: true while fetching data isError: true if an error occurred error holds error obj
  const { isLoading, isError, data: entries, error } = useEntries();//to fetch entries
  
  //this is my another custom hook and I am passing all setter function for the form field so that indirectly useAddEntry will edit states in the form
  const { isSubmitting, submissionError, handleSubmit } = useAddEntry(
    setName,
    setTechnology,
    setCompany,
    setDescription,
    setValidationErrors
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Dashboard
      </h1>

      <NewEntryForm
        name={name}
        technology={technology}
        company={company}
        description={description}
        setName={setName}
        setTechnology={setTechnology}
        setCompany={setCompany}
        setDescription={setDescription}
        validationErrors={validationErrors}
        handleSubmit={(e) => handleSubmit(e, name, technology, company, description)}
        isSubmitting={isSubmitting}
        submissionError={submissionError}
      />

      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-700">
        Your Entries
      </h2>

      <EntryList
        isLoading={isLoading}
        isError={isError}
        error={error}
        entries={entries}
      />
    </div>
  );
};

export default DashboardPage;

