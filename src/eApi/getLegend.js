import { Autil } from './index';

const GetLegend = async (data = {}) => {
    return Autil.post('/getLegend', data);
}

export { GetLegend };