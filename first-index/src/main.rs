pub fn str_str(haystack: String, needle: String) -> i32 {
    match haystack.find(&needle) {
        Some(index) => index as i32,
        None => -1,
    }
}

fn main() {
    let firstindex: i32 = str_str("heltesthel".to_string(), "test".to_string());
    println!("Hello, world! {}", firstindex);
}
