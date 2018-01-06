<template>
    <form v-cloak>
        <h1>Web Development Jobs (Pls select to count the total wage)</h1>
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
    </form>
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
                },{
                    name: 'Frontend JavaScript Developer',
                    wage: 1200,
                    active:false
                },{
                    name: 'Backend JavaScript Developer',
                    wage: 1500,
                    active:false
                }
            ],

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

    form {
        border-radius: 2px;
        /* box-shadow: 0 1px 1px #ccc; */
        /* padding: 15px 30px; */
        margin: 0 auto;
    }
    form ul {
        list-style: none;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        /* margin: 20px 0 15px; */
    }
    form ul li {
        background-color: #8ec16d;
        margin-bottom: 8px;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        cursor: pointer;
        padding: 2px 10px;
    }
    form ul li.active{
        background-color: lightcoral;
    }
    .conditional-services {
        background-color: #61a1bc;

        width: 500px;
        height: 180px;  
        margin: 20px auto;
        padding: 10px 0;  

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .job-item {
        cursor: pointer;
    }
    .total {
        font-weight: bold;
    }
</style>
