export default {
    ipi2a(intIp) {
        let ip = [];
        ip[0] = (intIp >> 24) & 0xff;
        ip[1] = (intIp >> 16) & 0xff;
        ip[2] = (intIp >> 8) & 0xff;
        ip[3] = intIp & 0xff;
        return ip.join('.')
    }
}