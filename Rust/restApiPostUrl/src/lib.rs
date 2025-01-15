use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::future_to_promise;
use serde_json::json;
use reqwest::Client;
use js_sys::Promise;
use web_sys::console;

// Instead of using function marco:
// #[tokio::main] for async await futures, we use:
// #[wasm_bindgen] since crate wasm-bindgen-futures handles async await futures.
#[wasm_bindgen]
pub fn post_url_text() -> Promise {
    // Wrap the async future into a JavaScript-compatible promise
    future_to_promise(async {
        let url = "https://httpbin.org/post";
        let client = Client::new();

        // JSON data to send
        let payload = json!({
            "name": "Jane Doe",
            "age": 20,
            "city": "New York"
        });

        // Send the POST request
        match client.post(url).json(&payload).send().await {
            Ok(response) => match response.text().await {
                Ok(body) => {
                    console::log_1(&format!("Response: {}", body).into());
                    Ok(JsValue::from_str(&body))
                }
                Err(err) => {
                    console::log_1(&format!("Error reading body: {}", err).into());
                    Err(JsValue::from_str("Failed to read response body"))
                }
            },
            Err(err) => {
                console::log_1(&format!("Error sending request: {}", err).into());
                Err(JsValue::from_str("Failed to send request"))
            }
        }
    })
}
