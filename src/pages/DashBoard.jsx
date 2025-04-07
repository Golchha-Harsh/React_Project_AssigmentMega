import React, { useState } from "react";
import NewEntryForm from "../components/dashboard/NewEntryForm";
import EntryList from "../components/dashboard/EntryList";
import useAddEntry from "../hooks/useAddEntries";
import useEntries from "../hooks/useEntries";

const DashboardPage = () => {
  //This  state value habdles entry form
  const [name, setName] = useState("");
  const [technology, setTechnology] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  //this line will call useEntries hook to fetch data as we know it is implemented by tanstack so it will
//give isLoading isError Data error
  const { isLoading, isError, data: entries, error } = useEntries();
  //this is my anotheer custom hook and I am passing all setter function for the form field so that indirctly useAddEntry will edit states in the form
  const { addEntry,isSubmitting, submissionError, handleSubmit } = useAddEntry(
    setName,
    setTechnology,
    setCompany,
    setDescription,
    setValidationErrors
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Dashboard Page
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

      <h2 className="text-xl font-semibold mb-2">Existing Entries</h2>
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
// // src/pages/DashBoard.js
// import React, { useState } from "react";
// import api from "../lib/api";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import NewEntryForm from "../components/dashboard/NewEntry";
// import EntryList from "../components/dashboard/EntryList";
// import { validateName,validateTechnology,validateCompany,validateDescription } from "../utils/Validation";

// const DashboardPage = () => {
//   const queryClient = useQueryClient();

//   const { isLoading, isError, data: entries, error, refetch } = useQuery({
//     queryKey: ["entries"],
//     queryFn: async () => {
//       const response = await api.get("/entries");
//       return response.data;
//     },
//   });

//   const [name, setName] = useState("");
//   const [technology, setTechnology] = useState("");
//   const [company, setCompany] = useState("");
//   const [description, setDescription] = useState("");
//   const [validationErrors, setValidationErrors] = useState({});

//   const validateForm = () => {
//     const errors = {};
//     const nameError = validateName(name);
//     if (nameError) {
//       errors.name = nameError;
//     }
//     const technologyError = validateTechnology(technology);
//     if (technologyError) {
//       errors.technology = technologyError;
//     }
//     const companyError = validateCompany(company);
//     if (companyError) {
//       errors.company = companyError;
//     }
//     const descriptionError = validateDescription(description);
//     if (descriptionError) {
//       errors.description = descriptionError;
//     }
//     return errors;
//   };

//   const { mutate: addEntry, isLoading: isSubmitting, error: submissionError } = useMutation({
//     mutationFn: async (newEntry) => {
//       const response = await api.post("/entries", newEntry);
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["entries"]);
//       setName("");
//       setTechnology("");
//       setCompany("");
//       setDescription("");
//       setValidationErrors({});
//     },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     setValidationErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       const newEntry = { name, technology, company, description };
//       addEntry(newEntry);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">
//         Dashboard Page
//       </h1>

//       <NewEntryForm
//         name={name}
//         technology={technology}
//         company={company}
//         description={description}
//         setName={setName}
//         setTechnology={setTechnology}
//         setCompany={setCompany}
//         setDescription={setDescription}
//         validationErrors={validationErrors}
//         handleSubmit={handleSubmit}
//         isSubmitting={isSubmitting}
//         submissionError={submissionError}
//       />

//       <h2 className="text-xl font-semibold mb-2">Existing Entries</h2>
//       <EntryList
//         isLoading={isLoading}
//         isError={isError}
//         error={error}
//         entries={entries}
//       />
//     </div>
//   );
// };
