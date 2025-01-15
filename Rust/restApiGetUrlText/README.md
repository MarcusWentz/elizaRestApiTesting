YouTube tutorial:

https://www.youtube.com/watch?v=nW71Mlbmxt8

Rust input program to compile into WASM located in:
```shell
src/lib.rs
```
Generate WASM output:
```shell
wasm-pack build --target web
```
Run the HTML page locally with:
```shell
npx http-server 
```