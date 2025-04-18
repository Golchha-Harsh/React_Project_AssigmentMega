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
    error: submissionError
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

  return { isSubmitting, submissionError, handleSubmit };
};

export default useAddEntry;
