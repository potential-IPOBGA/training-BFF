import {RESTDataSource} from "apollo-datasource-rest";

export type todo = {
    value: string
}

export class TrainingBackEndApi extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'http://localhost:8080/';
    }

    async getGroups() {
        // Send a GET request to the specified endpoint
        return this.get(`groups`);
    }

    async getTrainers() {
        return this.get(`trainers`)
    }

    async getTrainees() {
        return this.get(`trainees`)
    }
}
