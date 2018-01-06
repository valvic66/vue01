<template>
    <div>
        <h1>Navigation Menu (Pls click on each menu item for selection)</h1>
        <div class="navigation-menu">
            <div v-bind:class="active" v-on:click.prevent>
                <a href="#" class="home" v-on:click="makeActive('home')">Home</a>
                <a href="#" class="jobs" v-on:click="makeActive('jobs')">Jobs</a>
                <a href="#" class="contact" v-on:click="makeActive('contact')">Contact</a>
            </div>

            <div class="menu-text">You chose <b>{{active}}</b></div>
        </div>    
    </div>
</template>

<script>
export default {
    name: 'NavigationMenu',
    data () {
        return {
            active: 'home',
            isActive: 'isActive'
        }
    },
    methods: {
        makeActive: function (item) {
        this.active = item
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    margin: 0;
    padding: 0;
}
.navigation-menu {
    display: inline-block;
    background-color: #5597b4;
    border-radius: 4px;

    margin-top: 1em;
}

a {
    display: inline-block;
    padding: 12px 30px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;
    line-height: 1;
    text-transform: uppercase;
    background-color: transparent;

    -webkit-transition: background-color 0.2s;
    -moz-transition: background-color 0.2s;
    transition: background-color 0.2s;
}
a:hover {
    background-color: lightskyblue;
}

a:first-child{
    border-radius:4px 0 0 4px;
}

a:last-child{
    border-radius:0 4px 4px 0;
}

div.home .home,
div.jobs .jobs,
div.contact .contact{
    background-color:#e35885;
}

.menu-text {
    font-size: 22px;
    color: black;

    margin: .5em 0;
}

.menu-text b {
    color: black;
    display: inline-block;
    padding: 5px 10px;
    background-color: yellow;
    border-radius: 2px;
    text-transform: uppercase;
    font-size: 18px;
}
.isActive {
    background-color:#e35885;
}
</style>
