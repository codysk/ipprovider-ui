<template>
    <div class="status">
        <div class="side-title">Status</div>
        <div class="status-grid table-dark">
            <div class="status-card status-running">1<div class="status-label">Running</div></div>
            <div class="status-card status-assigned">2<div class="status-label">Assigned</div></div>
            <div class="status-card status-containers">3<div class="status-label">Containers</div></div>
            <div class="status-card status-exited">4<div class="status-label">Exited</div></div>
        </div>
        <div class="table-dark bottom-table" >
            <div class="status-line"><span class="status-label">Mem Usage</span><span class="status-value">12.8Mi</span></div>
            <div class="status-line"><span class="status-label">Containers</span><span class="status-value">8</span></div>
        </div>
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
    .status-line {
        padding: .3em .5em;
        border-top: 1px solid #3e494e;
    }
    .status-grid {
        overflow: hidden;
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
    .status-value {
        float: right;
    }
    @media (max-width: 768px) {
        .status-grid {
            grid-template-columns: none;
        }
        .status-label{
            display: none;
        }
        .status-value {
            float: none;
        }
    }
</style>