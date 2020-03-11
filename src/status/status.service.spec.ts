import test, { ExecutionContext } from 'ava';
import { StatusService } from './status.service';

const service: StatusService = new StatusService();

test('get application status', async (t: ExecutionContext) => {
    const data: string = service.get();
    t.deepEqual(data, 'running');
});