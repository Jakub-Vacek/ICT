import moment from 'moment';
import { ICardStatus } from '../../card-status';
import { ICardValidity } from '../../card-validity';
import { CardResponse } from './card-response.model';


export class CardSerializerService {
    public create(status: ICardStatus, validity: ICardValidity): CardResponse {
        return {
            stateDescription: status.state_description,
            validityEnd: moment(validity.validity_end).format('D.M.YYYY')
        };
    }
}