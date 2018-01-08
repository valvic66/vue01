<template>
    <div class="conditional effect" v-cloak>
        <h2 style="padding-top: 20px; text-align: center;">Web Development Jobs</h2>
        <div class="conditional-services">
            <ul>
                <li
                    class="job-item"
                    v-for="(job, item) in jobs"
                    v-bind:key="item"
                    v-on:click="toggleActive(job)"
                    v-bind:class="{'active': job.active}"
                >
                    {{ job.name }} -> ${{ job.wage }}
                </li>
            </ul>
            <div class="total">
                Total: <span>{{total() | currency}}</span>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    name: 'ConditionalServices',
    data () {
        return {
            jobs: [
                {
                    name: 'Fullstack JS Developer',
                    wage: 1700,
                    active:true
                },
                {
                    name: 'Frontend JS Developer',
                    wage: 1200,
                    active:false
                },
                {
                    name: 'Backend JS Developer',
                    wage: 1500,
                    active:false
                }
            ]
        }
    },
    methods: {
        toggleActive: function (s) {
            s.active = !s.active
        },
        total: function () {
            var total = 0;
            this.jobs.forEach(function(s) {
                if (s.active) {
                    total +=s.wage
                }
            })
            return total
        }
    },
    filters: {
        currency: function (value) {
            return '$' + value.toFixed(2)
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    [v-cloak] {
        display: none;
    }
    * {
        margin: 0;
        padding: 0;    
    }
    .conditional {
        max-width: 90%;
        min-width: 360px;
        background:#FFF;
        margin: 5px auto;
        padding-bottom: 10px;
    }
    .conditional-services {
        background-color: #61a1bc;

        width: 80%;
        margin: 20px auto;
        padding: 20px 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    .effect {
        position:relative;
        -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
        box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    }
    .effect:before, .effect:after {
        content:"";
        position:absolute;
        z-index:-1;
        -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
        -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
        box-shadow:0 0 20px rgba(0,0,0,0.8);
        top:10px;
        bottom:10px;
        left:0;
        right:0;
        -moz-border-radius:100px / 10px;
        border-radius:100px / 10px;
        }
    .effect:after {
        right:10px;
        left:auto;
        -webkit-transform:skew(8deg) rotate(3deg);
        -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
        -o-transform:skew(8deg) rotate(3deg);
        transform:skew(8deg) rotate(3deg);
    }
    div ul {
        list-style: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: left;

        width: 80%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div ul li {
        background-color: #8ec16d;
        margin-bottom: 8px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        cursor: pointer;
        padding: 2px 10px;
        width: 90%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div ul li.active{
        background-color: lightcoral;
    }
    .job-item {
        cursor: pointer;
        font-size: .9em;
    }
    .total {
        font-weight: bold;
    }
    @media screen and (min-width: 576px) {
        .conditional { max-width: 80%; }
    }
    @media screen and (min-width: 768px) {
        .conditional { max-width: 70%; }
    }
    @media screen and (min-width: 992px) {
        .conditional { max-width: 60%; }
    }
    @media screen and (min-width: 1024px) {
        .conditional { max-width: 50%; }
    }
</style>
