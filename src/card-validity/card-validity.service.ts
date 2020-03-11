import { ICardValidity } from './card-validity.interface';
import axios, { AxiosResponse } from 'axios';

export class CardValidityService {
    public static API_PATH: string = 'http://private-264465-litackaapi.apiary-mock.com/cards/';
    public async getValidity(id: number): Promise<ICardValidity> {
        const response: AxiosResponse<ICardValidity> = await axios.get(`${CardValidityService.API_PATH}/${id}/validity`);
        return response.data;
    }
}