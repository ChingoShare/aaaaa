import axios from "axios";

export class FlatsService {
    getFlats() {
        return axios("./entities.json", {
            method: "GET"
        })
            .then((response) => response.data.response)
            .catch(console.log);
    }
}
