import { Autil } from './index';

const GetCandlestick = async (data = {}) => {
    return Autil.post('/getCandlestick', data);
}

export { GetCandlestick };