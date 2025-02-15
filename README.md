AWS Amplify Coding Challenge: Service Request Application

**Description** :
	This is a front-end application built using AWS Amplify that includes user authentication, fetches and displays static content from an S3 bucket, and provides a mini portal where users can submit service requests. The submitted requests are saved to DynamoDB and displayed on the UI.

**Technologies Used** :

Frontend: React.js

Backend: AWS Amplify

Authentication: AWS Cognito

Storage: AWS S3

Database: AWS DynamoDB

API: AWS AppSync (GraphQL)

**Setup Instructions:**

1. AWS Amplify CLI:  npm install -g @aws-amplify/cli
2. Amplify Configuration: amplify configure
3. Clone this repository to your local machine:
   git clone `<git@github.com:aasrith-dondapati/AWS_Amplify.git>`
   cd `<AWS_Amplify>`
4. Install the required dependencies: npm install

**Set Up AWS Amplify:**

1. Initialize the Amplify project: amplify init
2. Add Authentication: amplify add auth
3. Add Storage (S3): amplify add storage
4. Add API (GraphQL): amplify add api
5. Push the changes to AWS: amplify push
6. Start the development server: npm start
