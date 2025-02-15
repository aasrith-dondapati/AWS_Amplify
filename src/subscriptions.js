/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServiceRequest = /* GraphQL */ `
  subscription OnCreateServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onCreateServiceRequest(filter: $filter) {
      id
      caseNumber
      requestName
      requestDescription
      creationDate
      severity
      resolutionDate
      reporterName
      contactInformation
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateServiceRequest = /* GraphQL */ `
  subscription OnUpdateServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onUpdateServiceRequest(filter: $filter) {
      id
      caseNumber
      requestName
      requestDescription
      creationDate
      severity
      resolutionDate
      reporterName
      contactInformation
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteServiceRequest = /* GraphQL */ `
  subscription OnDeleteServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onDeleteServiceRequest(filter: $filter) {
      id
      caseNumber
      requestName
      requestDescription
      creationDate
      severity
      resolutionDate
      reporterName
      contactInformation
      location
      createdAt
      updatedAt
      __typename
    }
  }
`;
