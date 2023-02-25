# PokéBull - A Simple Concurrency Test with Node.js and BullMQ

PokéBull is a Node.js application that tests concurrency by calling the Pokemon API using [BullMQ](https://github.com/taskforcesh/bullmq), a Redis-backed job queue.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [How it Works](#how-it-works)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Introduction

PokéBull is a simple application designed to test concurrency with Node.js and BullMQ. It calls the Pokemon API to retrieve information about a random Pokemon and uses BullMQ to execute multiple API calls in parallel.

This project is ideal for those who want to learn about concurrency with Node.js and BullMQ, as well as those who want to see a practical example of how to use a job queue.

## Getting Started

To get started with this project, you'll need to have Node.js and Redis installed on your local machine. 

1. Clone this repository to your local machine
2. Run `npm install` to install the required dependencies
3. Start Redis on your local machine
4. Run `node index.js` to start the application

## How it Works

This application uses BullMQ to create a job queue and worker process. The worker process listens to the queue and retrieves jobs to execute. Each job consists of calling the Pokemon API to retrieve information about a random Pokemon.

By default, the application runs 10 jobs concurrently. You can adjust this number by modifying the `concurrency` parameter in the `index.js` file.

## Dependencies

This project relies on the following dependencies:

- Node.js
- BullMQ
- IORedis

## Contributing

If you find any bugs or have suggestions for improvement, please feel free to submit an issue or pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
