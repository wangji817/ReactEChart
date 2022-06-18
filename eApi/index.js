import { axios } from 'axios';

axios.defaults.baseURL = '/service';

const instance = axios.create({
    baseURL: '/chartsService'
});
instance.defaults.timeout = 25000;

const Autil = {
    get: (url, data) => {
        return new Promise((resolve, reject) => {
            instance.get(url, data).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            instance.post(url, data).then((data) => {
                resolve(data);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}

export { Autil };