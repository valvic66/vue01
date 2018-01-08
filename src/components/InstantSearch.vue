<template>
    <div class="instant-search effect" v-cloak>
        <h2 style="padding-top: 20px; text-align: center;">Instant Search</h2>
        <div class="search-bar">
            <input type="text" v-model="searchString" placeholder="Enter Apple product search">
        </div>
        <ul>
            <li
                class="data-item"
                v-for="(article, key) in filteredArticles"
                v-bind:key="key"
            >
                <a v-bind:href="article.url"><img v-bind:src="article.image" /></a>
                <p>{{ article.title | capitalize }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'InstantSearch',
    data () {
        return {
            searchString: "",
            articles: [
                {
                    "title": "apple iPhone 6",
                    "url": "https://www.emag.ro/search/iphone",
                    "image": "https://s4emagst.akamaized.net/products/5617/5616445/images/res_ab736a4f78e2a562ad01325752875057_200x200_c0e1.jpg"
                },
                {
                    "title": "Apple PC iMac 27",
                    "url": "https://www.emag.ro/search/iMac",
                    "image": "https://s2emagst.akamaized.net/products/2420/2419759/images/res_fe514384118b62a95639073af813fd84_200x200_eimd.jpg"
                },
                {
                    "title": "Apple iPad 9.7",
                    "url": "https://www.emag.ro/search/iPad",
                    "image": "https://s4emagst.akamaized.net/products/5483/5482323/images/res_1f4e902c1a93fa6c0bdb86d7d67a23f3_200x200_agk8.jpg"
                },
                {
                    "title": "Apple MacBoook Pro 15",
                    "url": "https://www.emag.ro/search/macbook",
                    "image": "https://s5emagst.akamaized.net/products/8/7048/images/img233743_05062013155008_0_200x200_79gq.jpg"
                }
            ]
        }
    },
    computed: {
        filteredArticles: function () {
            var articles_array = this.articles
            var searchString = this.searchString

            if (!searchString) {
                return articles_array
            }

            searchString = searchString.trim().toLowerCase()

            articles_array = articles_array.filter (function(item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item
                }
            })

            return articles_array
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
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
    .instant-search {
        max-width: 90%;
        min-width: 360px;
        height: 480px;
        background:#FFF;
        margin: 5px auto;
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

    .search-bar {
        background-color:#5c9bb7;
        background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:linear-gradient(top, #5c9bb7, #5392ad);

        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        max-width: 90%;
        padding: 4px;
        margin: 20px auto 20px;
        position:relative;
    }
    .search-bar input {
        border: none;
        width: 100%;
        height: 10px;
        padding: 10px 0;

        border-radius: 2px;
        box-shadow: 0 2px 8px #c4c4c4 inset;
        text-align: left;
        font-size: 14px;
        font-family: inherit;
        color: #738289;
        font-weight: bold;
        outline: none;

        text-indent: 10px;
    }
    ul {
        list-style: none;
        width: 80%;
        margin: 0 auto;
        text-align: left;
    }
    ul li {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;
    }
    ul li a img {
        width: 60px;
        height: 60px;

        float: left;
    }
    ul li p {
        margin-left: 80px;
        font-size: .9em;
        font-weight: bold;
        padding-top: 18px;
        color:#6e7a7f; 
    }
    @media screen and (min-width: 576px) {
        .instant-search { max-width: 80%; }
    }
    @media screen and (min-width: 768px) {
        .instant-search { max-width: 70%; }
    }
    @media screen and (min-width: 992px) {
        .instant-search { max-width: 60%; }
    }
    @media screen and (min-width: 1024px) {
        .instant-search { max-width: 50%; }
    }
</style>
