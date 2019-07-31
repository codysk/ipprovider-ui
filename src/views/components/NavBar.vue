<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="bg-nav navbar">
            <b-navbar-brand href="#">IPProvider</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/">Config</b-nav-item>
                    <b-nav-item to="/about">About</b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .bg-nav {
        background-color: #541393;
    }
    .navbar {
        height: 4rem;
    }
</style>