<template>
    <div class="bg-side sidebar">
        content
    </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>
.bg-side {
    background-color: grey;
}
.sidebar {
    position: sticky;
    height: calc(100vh - 4rem);
    margin-left: -15px;
    margin-right: -15px;
}
</style>