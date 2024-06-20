# Backend Express API Repository

This repository contains a backend Express API that serves as the server-side application for handling submissions from a Visual Basic Windows application.

## API Endpoints and Functionality

### 1. Ping Route

- **Route:** `GET /ping`
- **Description:** Endpoint to check if the server is up and running.
- **Response:** 
  - Status Code: `200 OK`
  - Response Body: `true`

### 2. Submit Route

- **Route:** `POST /submit`
- **Description:** Endpoint to receive submission data from the Visual Basic Windows application.
- **Request Body:** 
  - JSON object containing:
    - `name` (string): Name of the submitter.
    - `email` (string): Email of the submitter.
    - `phone` (string): Phone number of the submitter.
    - `github_link` (string): GitHub repository link.
    - `stopwatch_timer` (string): Additional detail (timer value).
- **Response:** 
  - Status Code: `201 Created`
  - Response Body: `Form submitted successfully`

### 3. Read Route with Index Query Parameter

- **Route:** `GET /read`
- **Description:** Endpoint to fetch submissions based on an index query parameter.
- **Query Parameters:**
  - `index` (number): Index of the submission to retrieve.
- **Response:** 
  - Status Code: `200 OK`
  - Response Body: JSON object containing submission details based on the provided index.

### Check out the windows app for this task here
[Windows Visual Basic App](https://github.com/Sanketkatkade/Slidely-Task-2-Windows-App)