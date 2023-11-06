import { environment } from "src/environments/environment";

export class BackendService {
    constructor() {
        console.log("backend service api is", environment.api)
    }

    public static login = environment.api + "login";
}