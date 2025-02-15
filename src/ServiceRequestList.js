import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api'; // Correct import for generateClient
import { listServiceRequests } from './graphql/queries'; // Correct import for queries

const client = generateClient(); // Initialize the client

function ServiceRequestList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  async function fetchRequests() {
    try {
      const result = await client.graphql({
        query: listServiceRequests
      });
      setRequests(result.data.listServiceRequests.items);
    } catch (error) {
      console.error('Error fetching service requests:', error);
    }
  }

  return (
    <div>
      <h2>Submitted Service Requests</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            <p>Case Number: {request.caseNumber}</p>
            <p>Request Name: {request.requestName}</p>
            <p>Description: {request.requestDescription}</p>
            <p>Creation Date: {request.creationDate}</p>
            <p>Severity: {request.severity}</p>
            <p>Resolution Date: {request.resolutionDate}</p>
            <p>Reporter Name: {request.reporterName}</p>
            <p>Contact Information: {request.contactInformation}</p>
            <p>Location: {request.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceRequestList;