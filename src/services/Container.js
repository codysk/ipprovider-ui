import axios from "axios";
export default {
    containers: {},
    status: {
        running: 0,
        assigned: 0,
        containers: 0,
        exited:0 ,
    },
    getStatus: function () {
      return this.status
    },
    getContainers: function () {
        return this.containers
    },
    requestContainers: function (obj, eventBus) {
        let requestList = [
            axios.get('/api/getContainers'),
            axios.get('/api/getConnectedContainers')
        ];
        let $this = obj;
        return axios.all(requestList)
            .then(axios.spread((respContainers, respConnected) => {
                console.log(respContainers, respConnected);

                let status = {
                    running: 0,
                    assigned: 0,
                    containers: respContainers.data.length,
                    exited: 0 ,
                };

                for (let index in respContainers.data) {
                    if (!respContainers.data.hasOwnProperty(index)) continue;
                    let container = respContainers.data[index];
                    container['ProviderInfo'] = null;
                    if (respConnected.data.hasOwnProperty(container['Id'])){
                        container['ProviderInfo'] = respConnected.data[container['Id']]
                    }
                    $this.containers[container['Id']] = container;

                    if (container['State'] === 'exited') status.exited += 1;
                    if (container['State'] === 'running') status.running += 1;
                    if (container['ProviderInfo'] !== null) status.assigned += 1;
                }
                $this.status = status
            })).then(() => {
                eventBus.$emit("containers-update")
            })
    },
    startService: function (eventBus) {
        setInterval(this.requestContainers, 2000, this, eventBus)
    }
}