<template>
    <div class="home">
        <b-card-group columns v-for="group in containerGroups" v-bind:key="Object.keys(group).join(',')">
            <container-info-card v-for="container in group" v-bind:key="container.Id" :container="container" />
        </b-card-group>
        <assigning-box />
    </div>
</template>

<script>
    import containerService from '../services/Container'
    import Vue from 'vue'
    import ContainerInfoCard from "./components/ContainerInfoCard"
    import AssigningBox from "./components/AssigningBox";
    export default {
        name: 'home',
        components: {AssigningBox, ContainerInfoCard},
        data() {
            return {
                containerList:[],
                containerGroups: [],
                running: 0,
                assigned: 0,
                containers: 0,
                exited: 0,
            }
        },
        mounted() {
            this.$root.$on('containers-update', this.updateContainer);
            this.$root.$once('service-init-ready', this.ready);
        },
        methods: {
            updateContainer() {
                let containers = containerService.getContainers();
                // console.log(containers);
                let groupIndex = 0;
                let containerGroups = [];
                for (let id in containers) {
                    if (containerGroups.length <= groupIndex) {
                        containerGroups[groupIndex] = {}
                    }
                    if (!containers.hasOwnProperty(id)) continue;
                    containerGroups[groupIndex][id] = containers[id];
                    if (Object.keys(containerGroups[groupIndex]).length >= 3) groupIndex += 1;
                }

                Vue.set(this, 'containerGroups', containerGroups);
                Vue.set(this, 'containerList', containers);
            },
            routerHandler(to, from){
                if (to.params['pathMatch'] === 'edit/') {
                    let containerId = to.params['container_id'];
                    let container = this.containerList[containerId];
                    this.$root.$emit('assign-modal-show', container)
                }
                if (to.params['pathMatch'] == null) {
                    this.$root.$emit('assign-modal-hide', 'router')
                }
            },
            ready() {
                this.routerHandler(this.$route, null);
                this.updateContainer();
            }
        },
        beforeDestroy() {
            this.$root.$off('containers-update', this.updateContainer)
        },
        watch: {
            $route(to, from) {
                console.log(to, from);
                this.routerHandler(to, from);
            }
        }
    }
</script>

<style scoped>
    .home {
        padding: 1.5rem;
    }
</style>
