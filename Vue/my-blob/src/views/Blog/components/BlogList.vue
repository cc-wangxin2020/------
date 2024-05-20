<template>
    <div class="blog-list-container" v-loading="loading" ref="blogListContainer">
        <ul>
            <li v-for="item in data.row" :key="item.id">
                <div class="img-container" v-if="item.thumb" @click="handleClickToDetails(item)">
                    <img :src="imgUrl" alt="">
                </div>
                <div class="content">
                    <div class="title" @click="handleClickToDetails(item)">{{ item.title }}</div>
                    <div class="detail">
                        <span>日期：{{ formatData(item.createData) }}</span>
                        <span>浏览：{{ item.scanNumber }}</span>
                        <span>评论：{{ item.commentNumber }}</span>
                        <span class="category" @click="handleClickCate(item)">{{ item.category.name }}</span>
                    </div>
                    <div class="description" @click="handleClickToDetails(item)">{{ item.descriptions }}</div>
                </div>
            </li>
        </ul>
        <Pager v-if="data.total" :total="data.total" :current="routeInfo.page" :viewPageNum="10"
            @pageChange="handlePageChange"></Pager>
    </div>
</template>

<script>
import url from '@/assets/th.jpg'
import Pager from '@/components/Pager'
import fetchData from '@/mixin/fetchData.js'
import { getBlog } from '@/api/blog.js'
import { formatData } from '@/utils/formatData.js'

export default {
    mixins: [fetchData({})],
    components: {
        Pager
    },
    data() {
        return {
            imgUrl: url,
        }
    },
    mounted() {
        console.log(this.data);
    },
    computed: {
        routeInfo() {
            const categoryid = +this.$route.params.id || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            console.log(categoryid, page, limit);
            return {
                page, limit, categoryid
            }
        }
    },
    methods: {
        formatData,
        async getData() {
            return await getBlog(this.routeInfo.page, this.routeInfo.limit, +this.routeInfo.categoryid)
        },
        scorllTop() {
            this.$refs.blogListContainer.scrollTop = 0
        },
        handleClickToDetails(item) {
            this.scorllTop()
            this.$router.push({
                name: 'BlogDetail',
                params: { id: item.id },

            })
        },
        handleClickCate(item) {
            this.scorllTop()
            this.$router.push({
                name: 'Category',
                params: { id: item.category.id },

            })
        },
        async handlePageChange(currentNum) {
            this.scorllTop()
            this.$refs.blogListContainer.scrollTop = 0
            const query = { page: currentNum, limit: this.routeInfo.limit }
            if (this.routeInfo.categoryid === -1) {
                this.$router.push({
                    name: "Blog",
                    query
                })
            } else {
                this.$router.push({
                    name: "Category",
                    query,
                    params: {
                        id: this.routeInfo.categoryid
                    }
                })
            }
        }
    },
    watch: {
        $route: {
            async handler() {
                this.loading = true,
                    this.data = await this.getData()
                this.loading = false
                console.log('路由变化');
            },
            deep: false,
            immediate: false
        }
    }
}
</script>

<style lang="less" scoped>
.blog-list-container {
    position: relative;
    width: 100%;
    height: 100%;
    @mar-pad: 20px;
    padding: 0 @mar-pad;
    overflow: auto;
    scroll-behavior: smooth;

    li {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: @mar-pad 0;

        .img-container {
            width: 200px;
            height: 150px;
            flex: 0 0 auto;
            border-radius: 10px;
            cursor: pointer;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .content {
            margin-left: @mar-pad;
            flex: 1 1 auto;

            .title {
                font-size: 1.5rem;
                font-weight: bold;
                margin-bottom: 3px;
                cursor: pointer;

                &:hover {
                    color: rgb(103, 225, 255);
                }
            }

            .detail {
                color: #ccc;
                margin-bottom: 20px;
                cursor: pointer;

                span {
                    display: inline-block;
                    margin-right: 20px;
                }
            }

            .category {
                cursor: pointer;

                &:hover {
                    color: orange;
                }
            }

            .description {
                cursor: pointer;

                &:hover {
                    color: orange;
                }
            }
        }
    }
}
</style>