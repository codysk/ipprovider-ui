import axios from "axios";

export default {
    getContainers: function (containers) {
        let requestList = [
            axios.get('/api/getContainers'),
            axios.get('/api/getConnectedContainers')
        ];
        return axios.all(requestList)
            .then(axios.spread((respContainers, respConnected) => {
                console.log(respContainers, respConnected);
                for (let index in respContainers.data) {
                    if (!respContainers.data.hasOwnProperty(index)) continue;
                    let container = respContainers.data[index];
                    container['ProviderInfo'] = null;
                    if (respConnected.data.hasOwnProperty(container['Id'])){
                        container['ProviderInfo'] = respConnected.data[container['Id']]
                    }
                    containers[container['Id']] = container

                }
            }))
    }
}