import { Autil } from './index';

const GetLine = async (data = {}) => {
    return Autil.post('/getLine', data);
}

export { GetLine };