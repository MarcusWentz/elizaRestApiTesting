// Install Assembly Script Compiler with npm
// npm install assemblyscript
// Compile to WASM with 
// asc string.ts --outFile string.wasm --optimize

// // Install REST API library for Assembly Script
// // npm i as-fetch
// import { fetch } from "as-fetch/assembly";

// // Make sure to add this line! (For async only)
// export { responseHandler } from "as-fetch/assembly";

// export function restApiPostRequest(): void {
//   console.log("hi")
//   // fetch("http://api.quotable.io/random", {
//   //   method: "GET",
//   //   mode: "no-cors",
//   //   headers: [],
//   //   body: null,
//   // }).then((response) => {
//   //   let body = response.text();
//   //   console.log("Ok: " + response.ok.toString());
//   //   console.log("Status: " + response.status.toString());
//   //   console.log("Status Text: " + response.statusText);
//   //   console.log("Redirected: " + response.redirected.toString());
//   //   console.log("Response: " + body);
//   // });
// }

export function testString(): string {
  // In Javascript in HTML where WASM is loaded, value 1056 is returned since this is most likely where the string is pointed at in memory. 
  return "Y"
}

