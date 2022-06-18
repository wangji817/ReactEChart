import axios from 'axios';

const instance = axios.create({
    baseURL: '/online/chartsService/mast'
});
instance.defaults.timeout = 25000;

const Autil = {
    get: (url, data) => {
        return new Promise((resolve, reject) => {
            instance.get(url, data).then((data) => {
                if (data.status === 200) {
                    resolve(data.data);
                } else {
                    reject({ status: data.status });
                }
            }).catch((error) => {
                reject({ status: 404, msg: `${error.name}:${error.message}` });
            });
        });
    },
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            instance.post(url, data).then((data) => {
                if (data.status === 200) {
                    resolve(data.data);
                } else {
                    reject({ status: data.status });
                }
            }).catch((error) => {
                reject({ status: 404, msg: `${error.name}:${error.message}` });
            });
        });
    }
}

export { Autil };