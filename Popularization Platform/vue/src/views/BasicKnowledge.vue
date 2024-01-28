<template>
    <div>
        <el-row :gutter="20">
            <!-- https://wenku.baidu.com/view/6c1533fbd7d8d15abe23482fb4daa58da0111cc2.html?_wkts_=1702606913680-->
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link href="/characteristics" style="font-size: 20px; ">林木种类与特点</el-link>
                    <ul style="list-style: none; line-height: 35px; padding: 0 20px;">
                        <li>
                            <el-link href="/characteristics/sort" style="font-size: 16px">林木的分类</el-link>
                        </li>
                        <ol style="font-size: 14px;  padding: 0 40px;">
                            <li>目标树</li>
                            <li>辅助树</li>
                            <li>干扰树</li>
                            <li>其他树</li>
                        </ol>
                        <li>
                            <el-link href="/characteristics/sign" style="font-size: 16px">林木的特征</el-link>
                        </li>
                        <ol style="font-size: 14px; padding: 0 40px;">
                            <li>形态特征</li>
                            <li>结构特征</li>
                            <li>生长习性</li>
                        </ol>
                    </ul>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link href="/services" style="font-size: 20px">森林生态系统服务功能</el-link>
                    <ol style="line-height: 35px; padding: 10px 40px; font-size: 16px;">
                        <li>涵养水源功能</li>
                        <li>保育土壤功能</li>
                        <li>固碳释氧功能</li>
                        <li>林木营养积累功能</li>
                        <li>净化大气环境功能</li>
                        <li>生物多样性保护功能</li>
                    </ol>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <el-link href="/culture" style="font-size: 20px">林业文化与乡土传统</el-link>
                    <ol style="line-height: 35px; padding: 10px 40px; font-size: 16px;">
                        <li>茶文化</li>
                        <li>花文化</li>
                        <li>竹文化</li>
                        <li>森林文化</li>
                    </ol>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },

        methods: {}
    }
</script>
<style>


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
        min-height: 450px;
        padding:15px 30px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>