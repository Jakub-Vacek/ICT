import test, { ExecutionContext } from 'ava';
import { CardValidityService } from './card-validity.service';
import { ICardValidity } from './card-validity.interface';

const service: CardValidityService = new CardValidityService();

test('get card validity', async (t: ExecutionContext) => {
    const expected: ICardValidity = { validity_end: '2020-08-12T00:00:00', validity_start: '2016-08-12T00:00:00'};
    const data: ICardValidity = await service.getValidity(2);
    t.deepEqual(data, expected);
});