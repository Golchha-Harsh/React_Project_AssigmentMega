import {
    validateName,
    validateTechnology,
    validateCompany,
    validateDescription,
  } from "./validation";
  
  export const validateForm = (name, technology, company, description) => {
    const errors = {};
    const nameError = validateName(name);
    if (nameError) {
      errors.name = nameError;
    }
    const technologyError = validateTechnology(technology);
    if (technologyError) {
      errors.technology = technologyError;
    }
    const companyError = validateCompany(company);
    if (companyError) {
      errors.company = companyError;
    }
    const descriptionError = validateDescription(description);
    if (descriptionError) {
      errors.description = descriptionError;
    }
    return errors;
  };