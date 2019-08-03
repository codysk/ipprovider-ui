<template>
    <div id="app-container">
        <NavBar/>
        <b-container class="container-fluid" fluid>
            <b-row>
                <b-col cols="1" md="3" xl="2">
                    <SideBar/>
                </b-col>
                <b-col cols="11" md="9" xl="10">
                    <router-view/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import NavBar from "./views/components/NavBar";
    import SideBar from "./views/components/SideBar";
    export default {
        name: 'App',
        components: {SideBar, NavBar}
    }
</script>

<style>
    body {
        background-color: #eeeeee;
    }
    .container-fluid {
        position: absolute;
        top: 3.5rem;
    }
</style>