<template>
    <b-card style="margin-top: 15px; margin-bottom: 15px; max-width: 40rem;" :header="this.container.Names[0]">
        <b-card-text>
            <div class="container-id text-clip"><span>Container id: </span><b-badge>{{ this.container.Id }}</b-badge></div>
            <div class="container-image text-clip"><span>Image: </span><b-badge>{{ this.container.Image }}</b-badge></div>
            <div class="container-state text-clip"><span>State: </span><b-badge>{{ this.container.State }}</b-badge></div>
            <div class="container-state text-clip"><span>Network: </span><b-badge v-for="(_, network) in this.container.NetworkSettings.Networks" v-bind:key="network">{{ network }}</b-badge></div>
            <div class="container-state text-clip">
                <span>AssignedIp: </span>
                <b-badge v-if="this.container.ProviderInfo != null">
                    {{ utils.ipi2a(this.container.ProviderInfo['ExternalIP']) }}
                </b-badge>
                <router-link v-if="container.State == 'running'" :to="'/edit/' + this.container.Id"><font-awesome-icon class="edit-icon" icon="pencil-alt" /></router-link>
            </div>
        </b-card-text>
    </b-card>
</template>

<script>
    import utils from "../../utils"
    export default {
        name: "ContainerInfoCard",
        props: ["container"],
        data() {
            return {
                utils
            }
        }
    }
</script>

<style scoped>
    .text-clip {
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .edit-icon {
        margin: 0 .3em;
    }
    .badge {
        margin: 0 .1em;
    }
</style>