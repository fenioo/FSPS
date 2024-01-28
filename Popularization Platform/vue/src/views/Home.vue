<template>
    <div>
        <el-carousel :interval="4000" type="card" height="350px">
            <el-carousel-item v-for="(item,index) in towerPhoto" :name=item>
                <el-image :src=item @click="onPreview(index)">
                </el-image>
            </el-carousel-item>
            <elImageViewer
                    v-if="showV-iewer"
                    :on-close="closeViewer"
                    :url-list=viewerImgList
                    :z-index=3000>
            </elImageViewer>
        </el-carousel>
        <div>
            <el-row :gutter="20">
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <el-link href="/basicKnowledge" style="font-size: 20px">林业基础常识</el-link>
                        <ul class="ul1" style="list-style: none;">
                            <li>林木种类与特点</li>
                            <li>森林生态系统服务功能</li>
                            <li>林业文化与乡土传统</li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-link href="/ecology" style="font-size: 20px">森林生态科普</el-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-link href="/climate" style="font-size: 20px">气候变化与林业科普</el-link>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <el-link href="/fireproof" style="font-size: 20px">森林防火与灾害科普</el-link>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-link href="/farmer" style="font-size: 20px">农民从业者</el-link>
                        <ul style="list-style: none; ">
                            <li>林木种植与管理技术</li>
                            <li>林下经济与农林复合经营</li>
                            <li>农村发展与林业扶贫</li>
                            <li>林地规划与土地利用</li>
                            <li>林业机械与设备</li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="grid-content bg-purple">
                        <el-link href="/policy" style="font-size: 20px">林业政策与法规</el-link>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style>
    .ul1 {
        display: flex;
    }
    .ul1 li {
        flex: 1;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #fdc4c4;
    }

    .bg-purple {
        background: rgba(154, 153, 153, 0.14);
    }

    .bg-purple-light {
        background: #ffffff;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 250px;
        padding: 18px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
<script>
    import request from "@/utils/request";
    import elImageViewer from 'element-ui/packages/image/src/image-viewer';

    export default {

        name: 'HomeView',
        components: {
            elImageViewer
        },
        data() {
            return {
                towerPhoto: [
                    require('@/assets/banner/banner-01.jpg'),
                    require('@/assets/banner/banner-02.jpg'),
                    require('@/assets/banner/banner-03.jpg'),
                    require('@/assets/banner/banner-04.jpg'),
                    require('@/assets/banner/banner-05.jpg'),
                    require('@/assets/banner/banner-06.jpg'),
                    require('@/assets/banner/banner-07.jpg'),
                    require('@/assets/banner/banner-08.jpg'),
                    require('@/assets/banner/banner-09.jpg'),
                    require('@/assets/banner/banner-10.jpg'),
                ],
                viewerImgList: ['@/assets/banner/banner-01.jpg',
                    '@/assets/banner/banner-02.jpg',
                    '@/assets/banner/banner-03.jpg',
                    '@/assets/banner/banner-04.jpg',
                    '@/assets/banner/banner-05.jpg',
                    '@/assets/banner/banner-06.jpg',
                    '@/assets/banner/banner-07.jpg',
                    '@/assets/banner/banner-08.jpg',
                    '@/assets/banner/banner-09.jpg',
                    '@/assets/banner/banner-10.jpg'],
            }
        },
        methods: {
            //打开查看器
            onPreview(index) {
                this.showViewer = true
                let tempImgList = [...this.towerPhoto];
                let temp = [];
                for (let i = 0; i < index; i++) {
                    temp.push(tempImgList.shift());
                }
                this.viewerImgList = tempImgList.concat(temp);
            },
            // 关闭查看器
            closeViewer() {
                this.showViewer = false
            },

        }
    }
</script>

