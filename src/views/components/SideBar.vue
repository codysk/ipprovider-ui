<template>
    <div class="bg-side sidebar">
        <div class="status">
            <div class="status-grid">
                <div class="status-card">1</div>
                <div class="status-card">1</div>
                <div class="status-card">1</div>
                <div class="status-card">1</div>
            </div>
            <b-table class="table-dark bottom-table" thead-class="no-table-header" small :items="items" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBar",
        data() {
            return {
                items : [
                    {k: "Mem Usage", v: "12.8Mi"},
                    {k: "Containers", v: "8"},
                ]
            }
        }
    }
</script>

<style scoped>
    .bg-side {
        background-color: grey;
    }
    .sidebar {
        display: flex;
        flex-direction: column;
        position: sticky;
        height: calc(100vh - 4rem);
        margin-left: -15px;
        margin-right: -15px;
    }
    .status-val {
        float: right;
    }
    .status {
        margin-top: auto;
    }
    .bottom-table {
        margin: 0;
    }
    .status-grid {
        display: grid;
        grid-gap: 0.5em;
        grid-template-columns: 1fr 1fr;
        padding: .5em;
    }
    .status-card {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
</style>
<style>
    .no-table-header {
        display: none;
    }
</style>