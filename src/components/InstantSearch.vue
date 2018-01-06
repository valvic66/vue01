<template>
    <form class="instant-search" v-cloak>
        <h1>Instant Search</h1>
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
                <p>{{ article.title }}</p>
            </li>
        </ul> 
    </form>
</template>

<script>
export default {
    name: 'InstantSearch',
    data () {
        return {
            searchString: "",
            articles: [
                {
                    "title": "Apple iPhone 6",
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
   
    }
    .search-bar {
        background-color:#5c9bb7;
        background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);
        background-image:linear-gradient(top, #5c9bb7, #5392ad);

        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        max-width: 400px;
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
        width: 428px;
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
        margin-left: 90px;
        font-weight: bold;
        padding-top: 18px;
        color:#6e7a7f; 
    }
</style>
