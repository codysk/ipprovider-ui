<template>
    <div class="home">
        <b-card-group columns v-for="(group, index) in containerGroups" v-bind:key="index">
            <container-info-card v-for="container in group" :container="container" />
        </b-card-group>
    </div>
</template>

<script>
    import containerService from '../services/Container'
    import Vue from 'vue'
    import ContainerInfoCard from "./components/ContainerInfoCard";
    export default {
        name: 'home',
        components: {ContainerInfoCard},
        data() {
            return {
                containerGroups: []
            }
        },
        mounted() {
            let containers = {};
            let $this = this;
            containerService.getContainers(containers).then(function () {
                console.log(containers);
                let groupIndex = 0;
                for (let id in containers) {
                    if ($this.containerGroups.length <= groupIndex) {
                        Vue.set($this.containerGroups, groupIndex, {})
                    }
                    if (!containers.hasOwnProperty(id)) continue;
                    Vue.set($this.containerGroups[groupIndex], id, containers[id]);
                    if (Object.keys($this.containerGroups[groupIndex]).length >= 3) groupIndex += 1;
                }
            })

        }
    }
</script>

<style scoped>
    .home {
        padding: 1.5rem;
    }
</style>
