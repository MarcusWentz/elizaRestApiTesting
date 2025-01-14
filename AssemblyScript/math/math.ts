// Install Assembly Script Compiler with npm
// npm install assemblyscript
// Compile to WASM with 
// asc ascToWasmTest.ts --outFile ascToWasmTest.wasm --optimize
export function add(a: i32, b: i32): i32 {
  return a + b;
}
