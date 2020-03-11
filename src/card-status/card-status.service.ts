import { ICardStatus } from './card-status.interface';
import axios, { AxiosResponse } from 'axios';

export class CardStatusService {
    public static API_PATH: string = 'http://private-264465-litackaapi.apiary-mock.com/cards/';
    public async getStatus(id: number): Promise<ICardStatus> {
        const response: AxiosResponse<ICardStatus> = await axios.get(`${CardStatusService.API_PATH}/${id}/state`);
        return response.data;
    }
}
