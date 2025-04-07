// src/components/dashboard/NewEntryForm.js
import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const NewEntryForm = ({
  name,
  technology,
  company,
  description,
  setName,
  setTechnology,
  setCompany,
  setDescription,
  validationErrors,
  handleSubmit,
  isSubmitting,
  submissionError,
}) => {
  return (
    <div className="mb-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Submit New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="name"
          label="Name:"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={validationErrors.name}
        />
        <Input
          id="technology"
          label="Technology:"
          type="text"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          error={validationErrors.technology}
        />
        <Input
          id="company"
          label="Company:"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          error={validationErrors.company}
        />
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea
            id="description"
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${validationErrors.description ? "border-red-500" : ""}`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="4"
          ></textarea>
          {validationErrors.description && <p className="text-red-500 text-xs italic">{validationErrors.description}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Entry"}
        </Button>
        {submissionError && <p className="text-red-500 text-xs italic">{submissionError?.message}</p>}
      </form>
    </div>
  );
};

export default NewEntryForm;