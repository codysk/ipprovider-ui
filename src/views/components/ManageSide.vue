<template>
    <div class="manage">
        <div class="side-title">Manage</div>
        <div>
            <router-link class="side-link" to="/">Configure</router-link>
            <router-link class="side-link" to="/logs">Logs</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManagerSide",
    }
</script>

<style scoped>
    a:hover {
        text-decoration: none;
        color: white;
        background-color: #1c282d;
    }
    .router-link-exact-active, .router-link-exact-active:hover {
        background-color: #192429;
    }
</style>