# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running task in a request handler causes the server to become unresponsive to new requests.  The example uses a simple `while` loop to simulate a computationally intensive operation.

## Problem

Node.js is single-threaded. When a request handler executes a time-consuming operation, it blocks the event loop, preventing the server from handling other requests. This leads to unresponsiveness and poor performance.

## Solution

The solution involves offloading long-running tasks to worker threads or using asynchronous operations to prevent blocking the event loop. The provided solution demonstrates using asynchronous functions and promises to avoid this issue. 
