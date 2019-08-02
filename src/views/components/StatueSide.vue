<template>
    <div class="status">
        <div class="side-title">Status</div>
        <div class="status-grid table-dark">
            <div class="status-card status-running">1<div>Running</div></div>
            <div class="status-card status-assigned">2<div>Assigned</div></div>
            <div class="status-card status-containers">3<div>Containers</div></div>
            <div class="status-card status-exited">4<div>Exited</div></div>
        </div>
        <b-table class="table-dark bottom-table" thead-class="no-table-header" small :items="items" />
        <table class="table table-dark bottom-table table-sm" >
            <tr><td>Mem Usage</td><td>12.8Mi</td></tr>
            <tr><td>Containers</td><td>8</td></tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "StatueSide",
    }
</script>

<style scoped>
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
        padding: .3em;
        background: var(--color-status);
        align-items: center;
        display: flex;
        flex-direction: column;
    }
    .status-exited {
        --color-status: #bfc3cb;
    }
    .status-containers {
        --color-status: #898989;
    }
    .status-assigned {
        --color-status: #57cbde;
    }
    .status-running {
        --color-status: #90ba3c;
    }
</style>