<template>
    <div class="bg-side sidebar">
        <manager-side />
        <statue-side />
    </div>
</template>

<script>
    import StatueSide from "./StatueSide";
    import ManagerSide from "./ManageSide";
    export default {
        name: "SideBar",
        components: {ManagerSide, StatueSide},
    }
</script>

<style scoped>
    .bg-side {
        background-color: #222d32;
    }
    .sidebar {
        display: flex;
        flex-direction: column;
        position: sticky;
        height: calc(100vh - 3.5rem);
        margin-left: -15px;
        margin-right: -15px;
    }
</style>
<style>
    .no-table-header {
        display: none;
    }
    .side-title {
        padding: .75em 1em;
        background-color: black;
        color: white;
    }
    .side-link {
        align-items: center;
        box-sizing: border-box;
        color: white;
        cursor: pointer;
        display: flex;
        padding: 0.95em 1.25em;
        transition: background .2s;
        white-space: nowrap;
        width: 100%;
        border-top: 1px grey;
    }

    .navigation-link.navigation-link--active {
        border-color: deepskyblue;
    }
</style>