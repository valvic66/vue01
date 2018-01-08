<template>
    <div class="navigation effect" style="padding-top: 20px; text-align: center;">
        <h2>Navigation Menu</h2>
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
  name: "NavigationMenu",
  data() {
    return {
      active: "home",
      isActive: "isActive"
    };
  },
  methods: {
    makeActive: function(item) {
      this.active = item;
    }
  }
};
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
.navigation {
  max-width: 90%;
  min-width: 360px;
  background: #fff;
  margin: 0 auto;
  padding-bottom: 20px;
}
.effect {
  position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect:before,
.effect:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  top: 10px;
  bottom: 10px;
  left: 0;
  right: 0;
  -moz-border-radius: 100px / 10px;
  border-radius: 100px / 10px;
}
.effect:after {
  right: 10px;
  left: auto;
  -webkit-transform: skew(8deg) rotate(3deg);
  -moz-transform: skew(8deg) rotate(3deg);
  -ms-transform: skew(8deg) rotate(3deg);
  -o-transform: skew(8deg) rotate(3deg);
  transform: skew(8deg) rotate(3deg);
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

a:first-child {
  border-radius: 4px 0 0 4px;
}

a:last-child {
  border-radius: 0 4px 4px 0;
}

div.home .home,
div.jobs .jobs,
div.contact .contact {
  background-color: #e35885;
}

.menu-text {
  font-size: 22px;
  color: black;

  margin: 0.5em 0;
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
  background-color: #e35885;
}
@media screen and (min-width: 576px) {
  .navigation {
    max-width: 80%;
  }
}
@media screen and (min-width: 768px) {
  .navigation {
    max-width: 70%;
  }
}
@media screen and (min-width: 992px) {
  .navigation {
    max-width: 60%;
  }
}
@media screen and (min-width: 1024px) {
  .navigation {
    max-width: 50%;
  }
}
</style>
