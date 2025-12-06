export function getAPIURL() {
  return process.env.PAYLOAD_API_URL ?? "http://localhost:1337";
}
