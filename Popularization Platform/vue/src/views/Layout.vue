<template>
    <div>
        <el-container>
            <el-header style="height: 50px;  position: fixed; width: 100%; ">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect"
                         :router="true">
                    <div style="float: left;  margin-top: 10px;">
                        <el-link :underline="false" href="/"
                                 style=" font-size: 35px; margin-right: 50px;">
                            Forest
                        </el-link>
                    </div>
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title"><a href="/2" class="link">林业基础常识</a></template>
                        <el-menu-item index="2-1" @click="characteristics()">林木种类与特点</el-menu-item>
                        <el-menu-item index="2-2" @click="services()">森林生态系统服务功能</el-menu-item>
                        <el-menu-item index="2-3" @click="culture()">林业文化与乡土传统</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">森林生态科普</el-menu-item>
                    <el-menu-item index="4">气候变化与林业科普</el-menu-item>
                    <el-menu-item index="5">森林防火与灾害科普</el-menu-item>
                    <el-submenu index="6">
                        <template slot="title"><a href="/6" class="link">农民从业者</a></template>
                        <el-menu-item index="6-1" @click="planting()">林木种植与管理技术</el-menu-item>
                        <el-menu-item index="6-2" @click="economy()">林下经济与农林复合经营</el-menu-item>
                        <el-menu-item index="6-3" @click="antiPoverty()">农村发展与林业扶贫</el-menu-item>
                        <el-menu-item index="6-4" @click="land()">林地规划与土地利用</el-menu-item>
                        <el-menu-item index="6-5" @click="equipment()">林业机械与设备</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="7">林业政策与法规</el-menu-item>
                </el-menu>
            </el-header>

            <el-main style="margin-top: 50px">
                <router-view/>
            </el-main>

            <el-footer>
                <template>
                    <div style="align-content: center; color: #000000; font-size: 14px; padding: 30px 28px; background-color:rgb(241,241,241); height: 90px;  margin-top: -20px">
                        <br/>
                        <p>&copy; 2023 <a href="#" title="your site name">yoursite.com</a></p>
                    </div>
                </template>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data() {
            return {}
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            open() {
                this.$alert('<strong>这是 <i>联系我们</i> </strong>', '联系我们', {
                    dangerouslyUseHTMLString: true
                });
            },
            characteristics() {
                this.$router.push("/characteristics");
            },
            services() {
                this.$router.push("/services");
            },
            culture() {
                this.$router.push("/culture");
            },
            planting() {
                this.$router.push("/planting");
            },
            economy() {
                this.$router.push("/economy");
            },
            antiPoverty() {
                this.$router.push("/antiPoverty");
            },
            land() {
                this.$router.push("/land");
            },
            equipment() {
                this.$router.push("/equipment");
            },
            logout() {
                localStorage.removeItem("user");
                this.$router.push("/login");
            },
            home() {
                this.$router.push("/");
            }
        }
    }
</script>

<style>


    * {
        padding: 0;
        margin: 0;
        font-family: "楷体";
    }

    .link {
        color: grey;
        font-size: 15px;
        text-decoration: none;
    }

    .el-menu {
        border: transparent !important;

    }
</style>