// Install Assembly Script Compiler with npm
// npm install assemblyscript
// Compile to WASM with 
// asc ascToWasmTest.ts --outFile ascToWasmTest.wasm --optimize

// Install REST API library for Assembly Script
// npm i as-fetch
import { fetchSync } from "as-fetch/sync";

const response = fetchSync("http://api.quotable.io/random", {
  method: "GET",
  mode: "no-cors",
  headers: [],
  body: null,
});

let body = response.text();
console.log("Ok: " + response.ok.toString());
console.log("Status: " + response.status.toString());
console.log("Status Text: " + response.statusText);
console.log("Redirected: " + response.redirected.toString());
console.log("Response: " + body);