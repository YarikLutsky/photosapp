# NestJS Orders API

This is a NestJS project that provides API endpoints for managing orders and photo service, including creating and retrieving orders for a specific user. The project uses MongoDB as the database, which is run in a Docker container using Docker Compose.

## Features

- Create an order with details like email, full name, address, images, etc.
- Retrieve all orders for a specific user.
- Uses MongoDB for persistent storage, configured with Docker.

## Prerequisites

Before running the application, ensure that you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose]
- [Node.js](https://nodejs.org/en/download/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/get-npm)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/YarikLutsky/photosapp.git
   cd photosapp
   sudo docker-compose up -d
   sudo npm run start:dev
2. Possible to add .env file
DATABASE_URI
ORDERS_API_URL
PHOTO_API
PHOTO_TOKEN

3. curl  command for testing:

- curl -X GET "http://localhost:3000/photo/?numberOfUrls=30"

  Description: This endpoint retrieves a list of photo URLs. You can specify the number of URLs to retrieve by passing the numberOfUrls query parameter.

- curl -X POST "http://localhost:3000/order" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "fullName": "John Doe",
    "fullAddress": "123 Main St, Springfield",
    "imagesUrls": [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
    "frameColor": "black",
    "user": "some_name"
  }'

  Description: This endpoint creates a new order. The request body should contain order details such as email, fullName, fullAddress, imagesUrls, frameColor, and user.

- curl -X GET "http://localhost:3000/order/some_name"

  Description: This endpoint retrieves all orders for a specific user by passing the username as a path parameter.

Summary:
GET Photos: Use GET at http://localhost:3000/photo/?numberOfUrls={some number}.
Store Order: Use POST at http://localhost:3000/order.
Get Orders by User: Use GET at http://localhost:3000/order/{username}.