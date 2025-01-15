use wasm_bindgen::prelude::*;

#[wasm_bindgen]
// #[tokio::main]
pub fn get_url_text() -> String {
    // let body = reqwest::get("https://www.rust-lang.org")
    // .await?
    // .text()
    // .await?;

    // println!("body = {body:?}");
    // return "body = {body:?}";
    
    let test_string = "text test"; 
    println!("{}", test_string);
    return test_string.to_string();
}