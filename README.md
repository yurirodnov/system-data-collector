# System data-collector

![Cover](cover.jpg)

Backend app for a minimalistic dashboard with main metrics of machine.
There are issues with collecting some data in Windows, i use fake CPU temperature for that.

## Features

- Built with Express.js, TypeScript
- Frontend: https://github.com/yurirodnov/system-dashboard
- Collect data with https://github.com/sebhildebrandt/systeminformation
- Uses REST API and WebSocket

## Local run

Needs running backend on the same host

1.  **Clone the repo:**

    ```bash
    git clone https://github.com/yurirodnov/system-data-collector.git
    ```

    or via SSH

    ```bash
    git@github.com:yurirodnov/system-data-collector.git
    ```

2.  **Go to an app directory:**
    ```bash
    cd system-data-collector
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the dev server:**
    ```bash
    npm run dev
    ```
5.  **Open the link shown in the terminal (usually `http://localhost:3000`)**.

6.  **Build for production (optional)**:
    ```bash
    npm run build
    npm run start
    ```
