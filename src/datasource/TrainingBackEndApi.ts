import {RESTDataSource} from "apollo-datasource-rest";

export class TrainingBackEndApi extends RESTDataSource {
    constructor() {
        // Always call super()
        super();
        // Sets the base URL for the REST API
        this.baseURL = 'http://training-backend:8080';
    }

    async getGroups() {
        // Send a GET request to the specified endpoint
        return this.get(`/groups`);
    }

    async autoGroup() {
        return this.get(`/groups/auto-grouping`)
    }

    async getTrainersWithoutGroup() {
        return this.get(`/trainers/unGrouped`)
    }

    async getTraineesWithoutGroup() {
        return await this.get(`/trainees/unGrouped`)
    }

    async createTrainee(name: string) {
        return this.post(`/trainees`, {name})
    }

    async createTrainer(name: string) {
        return this.post(`/trainers`, {name})
    }

}
