import http from "../services/httpService";
import { apiUrl } from "../components/config.json";

const apiEndpoint = apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
