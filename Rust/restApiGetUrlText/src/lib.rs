use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::spawn_local; // Needed for spawning futures in WASM
use reqwest::Client;

#[wasm_bindgen]
pub async fn get_url_text() -> Result<JsValue, JsValue> {
    let url = "https://httpbin.org/get";

    let client = Client::new();
    match client.get(url).send().await {
        Ok(response) => {
            match response.text().await {
                Ok(body) => {
                    // Print for debugging purposes in the console
                    web_sys::console::log_1(&format!("Response: {}", body).into());
                    Ok(JsValue::from_str(&body))
                }
                Err(err) => {
                    // Log error and propagate to JS
                    web_sys::console::log_1(&format!("Error reading body: {}", err).into());
                    Err(JsValue::from_str("Failed to read response body"))
                }
            }
        }
        Err(err) => {
            // Log error and propagate to JS
            web_sys::console::log_1(&format!("Error sending request: {}", err).into());
            Err(JsValue::from_str("Failed to send request"))
        }
    }
}

// Helper function to integrate with WASM and call async functions
#[wasm_bindgen]
pub fn start_request() {
    spawn_local(async {
        match get_url_text().await {
            Ok(result) => web_sys::console::log_1(&result),
            Err(err) => web_sys::console::log_1(&err),
        }
    });
}
