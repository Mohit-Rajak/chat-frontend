// import { io } from "socket.io-client";

// const ENDPOINT = `${import.meta.env.VITE_BACKEND_URL}`;
// console.log(ENDPOINT, "asjkdhaskjdhkjahsdkjahd")
// const socket = io(ENDPOINT, {
// 	reconnectionDelay: 1000,
// 	reconnection: true,
// 	reconnectionAttempts: 10,
// 	transports: ["websocket"],
// 	agent: false,
// 	upgrade: false,
// 	rejectUnauthorized: false,
// });

// export default socket;


import { io } from "socket.io-client";  
const ENDPOINT = `${import.meta.env.VITE_BACKEND_URL}`;  

console.log(ENDPOINT, "Attempting to connect to the server");

const socket = io(ENDPOINT, {  
  reconnectionDelay: 1000,  
  reconnection: true,  
  reconnectionAttempts: 10,  
  transports: ["websocket"],  
  agent: false,  
  upgrade: false,  
  rejectUnauthorized: false,  
});

socket.on("connect_error", (error) => {
  console.error("Connection failed:", error.message);
});

socket.on("connect", () => {
  console.log("Connected to the server successfully!");
});

export default socket;
