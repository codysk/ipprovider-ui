<template>
    <div id="app-container">
        <NavBar/>
        <b-container fluid>
            <b-row>
                <b-col cols="12" md="3" xl="2">
                    <SideBar/>
                </b-col>
                <b-col cols="12" md="9" xl="8">
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