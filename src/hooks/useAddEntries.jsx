// // src/hooks/useAddEntry.js
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import api from "../lib/api";
// import {
//   validateName,
//   validateTechnology,
//   validateCompany,
//   validateDescription,
// } from "../utils/validation";
// //state setter functions are coming from parent dashboard used to update form and Validate errors
// const useAddEntry = (setName, setTechnology, setCompany, setDescription, setValidationErrors) => {
//   const queryClient = useQueryClient();

//   const validateForm = (name, technology, company, description) => {
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

//   const handleSubmit = async (e, name, technology, company, description) => {
//     e.preventDefault();
//     const errors = validateForm(name, technology, company, description);
//     setValidationErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       const newEntry = { name, technology, company, description };
//       addEntry(newEntry);
//     }
//   };

//   return { addEntry, isSubmitting, submissionError, handleSubmit };
// };

// export default useAddEntry;
// src/hooks/useAddEntry.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../lib/api";
import { validateForm } from "../utils/FormValidation";

const useAddEntry = (
  setName,
  setTechnology,
  setCompany,
  setDescription,
  setValidationErrors
) => {
  //tanstack query hook i  am using to quickly access cache
  const queryClient = useQueryClient();
  //useMutation is a tanttack hook i am using it for performing asynchronous operations that  mutate data on the server
  // it returns an object containing functions and status information related to the mutation.
  const {
    mutate: addEntry,
    isLoading: isSubmitting,
    error: submissionError,
  } = useMutation({
    //this is the actual logic behind api call
    mutationFn: async (newEntry) => {
      const response = await api.post("/entries", newEntry);
      return response.data;//I  am returning this data beacuse it is good practice because this data then access by on success callback
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["entries"]);
      setName("");
      setTechnology("");
      setCompany("");
      setDescription("");
      setValidationErrors({});
    },
  });

  const handleSubmit = (e, name, technology, company, description) => {
    e.preventDefault();
    const errors = validateForm(name, technology, company, description);
    setValidationErrors(errors);

    if (Object.keys(errors).length === 0) {
      const newEntry = { name, technology, company, description };
      addEntry(newEntry);
    }
  };

  return { addEntry, isSubmitting, submissionError, handleSubmit };
};

export default useAddEntry;
