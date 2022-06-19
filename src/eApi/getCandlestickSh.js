import { Autil } from './index';

const GetCandlestickSh = async (data = {}) => {
    return Autil.post('/getCandlestickSh', data);
}

export { GetCandlestickSh };