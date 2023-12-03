# Threads-Clone-Node

## Introduction
Threads-Clone-Node is a robust and scalable server-side application built with Node.js and Express, leveraging the power of Socket.IO for real-time communication. This server acts as a dedicated listener for sockets, supporting the functionality of the Threads-Clone app. Designed for deployment on AWS, it ensures high availability and performance.

## Features
- Real-time communication using Socket.IO
- Scalable Node.js/Express server structure
- Ready for deployment on AWS for enhanced availability
- Seamless integration with Threads-Clone app

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- npm (Node Package Manager)
- AWS Account (for deployment)

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/OliverMorla/threads-clone-node.git
   ```
2. Install NPM packages:
   ```
   npm install
   ```
3. Configure your environment variables in a `.env` file:
   ```
   SOCKET_PORT=your_socket_port
   ```

## Usage
To run the server locally:
```
node server.js
```

## Deployment
This application is configured for deployment on AWS. Follow the AWS documentation for deploying a Node.js app.

## Contributing
Please read [CONTRIBUTING.md](LINK_TO_CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## Authors
- **Oliver Morla** - *Initial work* - [OliverMorla](https://github.com/OliverMorla)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Hat tip to anyone whose code was used
- Inspiration
- etc