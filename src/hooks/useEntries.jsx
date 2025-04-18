// src/hooks/useEntries.js
import { useQuery } from "@tanstack/react-query";
import api from "../lib/api";

const useEntries = () => {
  return useQuery({
    queryKey: ["entries"],
    queryFn: async () => {
      const response = await api.get("/entries");
      return response.data;
    },
  });
};

export default useEntries;