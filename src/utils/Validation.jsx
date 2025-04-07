// src/utils/validation.js
export const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    } else if (name.trim().length < 3) {
      return "Name must be at least 3 characters long";
    }
    return null; // No error
  };
  
  export const validateTechnology = (technology) => {
    if (!technology.trim()) {
      return "Technology is required";
    }
    return null;
  };
  
  export const validateCompany = (company) => {
    if (!company.trim()) {
      return "Company is required";
    }
    return null;
  };
  
  export const validateDescription = (description) => {
    if (!description.trim()) {
      return "Description is required";
    } else if (description.trim().length < 20) {
      return "Description must be at least 20 characters long";
    }
    return null;
  };