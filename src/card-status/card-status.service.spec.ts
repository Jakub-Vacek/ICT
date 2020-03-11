import test, { ExecutionContext } from 'ava';
import { CardStatusService } from './card-status.service';
import { ICardStatus } from './card-status.interface';

const service: CardStatusService = new CardStatusService();

test('get card status', async (t: ExecutionContext) => {
    const expected: ICardStatus = { state_id: 100, state_description: 'Aktivní v držení klienta'};
    const data: ICardStatus = await service.getStatus(2);
    t.deepEqual(data, expected);
});