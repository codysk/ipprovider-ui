<template>
    <b-modal ref="assign-box" id="assign-box" size="lg" :cancel-disabled="disableBtn" :ok-disabled="disableBtn" @hide="hide" @ok="ok" @cancel="close" @close="close">
        <div class="container-id text-clip"><span>Container id: </span><b-badge>{{ this.container.Id }}</b-badge></div>
        <div class="container-image text-clip"><span>Image: </span><b-badge>{{ this.container.Image }}</b-badge></div>
        <div class="container-state text-clip"><span>State: </span><b-badge>{{ this.container.State }}</b-badge></div>
        <b-form>
            <b-form-group
                    label="Assign ip"
                    label-for="ip-input"
                    label-cols="2"
            >
                <b-form-input
                        id="ip-input"
                        v-model="ip"
                        :disabled="disableBtn"
                />
            </b-form-group>
        </b-form>
    </b-modal>
</template>

<script>
    import AssignManagerService from "../../services/AssignManager";
    import utils from "../../utils";
    export default {
        name: "AssigningBox",
        data() {
            return {
                container: {Id:'', Image:'', State:''},
                ip:'',
                disableBtn: false
            }
        },
        mounted() {
            this.$root.$on('assign-modal-show', this.modal);
            this.$root.$on('assign-modal-hide', this.deModal);
        },
        methods: {
            modal(container) {
                console.log('show assign-box for ' + container['Id']);
                this.container = container;
                this.ip = '';
                if (this.container.ProviderInfo !== null){
                    this.ip = utils.ipi2a(this.container.ProviderInfo['ExternalIP'])
                }
                if (typeof(this.$refs['assign-box']) === undefined)return;
                this.$refs['assign-box'].show()
            },
            deModal(trigger){
                console.log('hide assign-box');
                if (typeof(this.$refs['assign-box']) === undefined)return;
                this.$refs['assign-box'].hide(trigger)
            },
            hide(event){
                if (event.trigger === 'router') return;
                event.preventDefault();

                if (event.trigger === 'backdrop' || event.trigger === 'esc') {
                    this.$router.replace('/')
                }
            },
            close() {
                this.$router.replace('/')
            },
            ok(event) {
                console.log('ok clicked!');
                this.disableBtn = true;
                event.preventDefault();

                let $this = this;

                AssignManagerService.assignIpForContainerEx(this.ip, this.container).then(function () {
                    $this.disableBtn = false;
                    $this.close()
                })
            }
        }
    }
</script>

<style scoped>

</style>