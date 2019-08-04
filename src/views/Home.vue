<template>
    <div class="home">
        <b-card-group columns v-for="(group, index) in containerGroups" v-bind:key="index">
            <container-info-card v-for="container in group" v-bind:key="container.Id" :container="container" />
        </b-card-group>
        <b-modal></b-modal>
    </div>
</template>

<script>
    import containerService from '../services/Container'
    import Vue from 'vue'
    import ContainerInfoCard from "./components/ContainerInfoCard"
    export default {
        name: 'home',
        components: {ContainerInfoCard},
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
            this.updateContainer();
            this.$root.$on('containers-update', this.updateContainer)
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
            }
        },
        beforeDestroy() {
            this.$root.$off('containers-update', this.updateContainer)
        }
    }
</script>

<style scoped>
    .home {
        padding: 1.5rem;
    }
</style>
