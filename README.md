```markdown
# Rover Navigation Backend

This project is a Node.js backend application that simulates rover movement on a rectangular plateau.  
It was built as part of a Backend Developer internship assignment.

The application exposes a REST API that accepts plateau dimensions and rover instructions, processes them, and returns the final rover positions.

---

## Problem Overview

A plateau is defined by its upper-right coordinates.  
The lower-left corner is always assumed to be (0, 0).

Each rover:

- Has a starting position (x, y)
- Has a direction (N, E, S, W)
- Receives a sequence of instructions:
  - L → Rotate left
  - R → Rotate right
  - M → Move forward

Rovers are processed sequentially.  
They must not move outside the plateau boundaries.

---

## Tech Stack

- Node.js
- Express.js
- Joi (for request validation)

---

## Project Structure

```
src/
  controllers/
  services/
  models/
  routes/
  validations/
  middlewares/
  utils/
server.js
```

The structure follows a simple separation of concerns:

- Controller → Handles HTTP layer
- Service → Contains business logic
- Validation → Validates incoming requests
- Middleware → Centralized error handling

---

## Installation

Clone the repository:

```
git clone <repository-url>
cd rover-backend
```

Install dependencies:

```
npm install
```

Run in development:

```
npm run dev
```

Run normally:

```
npm start
```

The server runs on:

```
http://localhost:5000
```

---

## API Endpoint

### POST /api/rovers/execute

This endpoint processes rover instructions.

### Sample Request

```json
{
  "plateau": {
    "maxX": 5,
    "maxY": 5
  },
  "rovers": [
    {
      "position": { "x": 1, "y": 2, "direction": "N" },
      "instructions": "LMLMLMLMM"
    },
    {
      "position": { "x": 3, "y": 3, "direction": "E" },
      "instructions": "MMRMMRMRRM"
    }
  ]
}
```

### Sample Response

```json
{
  "success": true,
  "data": [
    { "x": 1, "y": 3, "direction": "N" },
    { "x": 5, "y": 1, "direction": "E" }
  ]
}
```

---

## Validation & Edge Cases Covered

The application validates:

- Plateau dimensions must be non-negative integers
- Rover coordinates must be within valid range
- Direction must be one of N, E, S, W
- Instructions must contain only L, R, M
- Rover cannot move outside plateau boundaries
- At least one rover must be provided

Invalid input returns proper 400 error responses.

---

## Design Notes

- Business logic is kept separate from routing.
- Validation happens before executing rover logic.
- Error handling is centralized using middleware.
- The system is stateless and easy to extend.

---

## Author

Munuri Gangadhar  
Backend Developer
```