import React, { useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { createServiceRequest } from './graphql/mutations';
import { v4 as uuidv4 } from 'uuid';
import './ServiceRequestForm.css'; // Import the CSS file

const client = generateClient();

function ServiceRequestForm() {
  const [formState, setFormState] = useState({
    requestName: '',
    requestDescription: '',
    creationDate: '',
    severity: 'Low',
    reporterName: '',
    contactInformation: '',
    location: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const caseNumber = uuidv4();
    const resolutionDate = calculateResolutionDate(formState.creationDate, formState.severity);
    const input = {
      caseNumber,
      requestName: formState.requestName,
      requestDescription: formState.requestDescription,
      creationDate: formState.creationDate,
      severity: formState.severity,
      resolutionDate,
      reporterName: formState.reporterName,
      contactInformation: formState.contactInformation,
      location: formState.location
    };

    try {
      await client.graphql({
        query: createServiceRequest,
        variables: { input }
      });
      alert('Service request submitted successfully!');
      setFormState({
        requestName: '',
        requestDescription: '',
        creationDate: '',
        severity: 'Low',
        reporterName: '',
        contactInformation: '',
        location: ''
      });
    } catch (error) {
      console.error('Error submitting service request:', error);
    }
  };

  const calculateResolutionDate = (creationDate, severity) => {
    const date = new Date(creationDate);
    if (severity === 'Low') date.setDate(date.getDate() + 5);
    else if (severity === 'Medium') date.setDate(date.getDate() + 3);
    else if (severity === 'High') date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <form onSubmit={handleSubmit} className="service-request-form">
      <div className="form-group">
        <label>Service Request Name</label>
        <input
          type="text"
          value={formState.requestName}
          onChange={(e) => setFormState({ ...formState, requestName: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Service Request Description</label>
        <textarea
          value={formState.requestDescription}
          onChange={(e) => setFormState({ ...formState, requestDescription: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Creation Date</label>
        <input
          type="date"
          value={formState.creationDate}
          onChange={(e) => setFormState({ ...formState, creationDate: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Severity</label>
        <select
          value={formState.severity}
          onChange={(e) => setFormState({ ...formState, severity: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="form-group">
        <label>Reporter Name</label>
        <input
          type="text"
          value={formState.reporterName}
          onChange={(e) => setFormState({ ...formState, reporterName: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Contact Information</label>
        <input
          type="email"
          value={formState.contactInformation}
          onChange={(e) => setFormState({ ...formState, contactInformation: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={formState.location}
          onChange={(e) => setFormState({ ...formState, location: e.target.value })}
          required
        />
      </div>
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
}

export default ServiceRequestForm;