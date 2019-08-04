import axios from "axios";
import qs from 'qs'
export default {
    assignIpForContainerEx(ip, container){
        if (container.ProviderInfo === null) {
            return this.assignIpForContainer(ip, container.Id)
        } else {
            let $this = this;
            return this.revokeAssigningIp(container.Id).then(function () {
                return $this.assignIpForContainer(ip, container.Id)
            })
        }
    },

    assignIpForContainer(ip, container){
        let data = {
            container_id: container,
            ip: ip
        };
        return axios.post('/api/assignIPForContainer', qs.stringify(data)).then(function (resp) {
            console.log(resp.data)
        })
    },
    revokeAssigningIp(containerId){
        let data = {
            container_id: containerId
        };
        return axios.post('/api/revokeAssigningIP', qs.stringify(data)).then(function (resp) {
            console.log(resp.data)
        })
    }
}
