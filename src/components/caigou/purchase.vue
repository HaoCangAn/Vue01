<template>
    <div>
        <myhead :title="ms"></myhead>
                <!-- 选项 -->  <!-- @select="handleSelect" --><!-- background-color="#F9F0F0" -->
                <el-menu
                class="el-menu-demo"
                mode="horizontal"
                text-color="#000"
                active-background-color="#DC5252"
                active-text-color="#fff" router>
                <el-row :gutter="20">
                    <el-col :span="6"><el-menu-item :index="'/pur/shop'" id="xia">
                    <el-badge :value="27" class="item"><i class="el-icon-shopping-cart-full"></i></el-badge>  <p class="bott">待采购下单</p></el-menu-item></el-col>
                    <el-col :span="6"><el-menu-item :index="'/pur/het'"><i class="el-icon-shopping-cart-full"></i><p class="bott">待收货</p></el-menu-item></el-col>
                    <el-col :span="6"><el-menu-item :index="'3'"><i class="el-icon-shopping-cart-full"></i><p class="bott">到货待验收</p></el-menu-item></el-col>
                    <el-col :span="6"><el-menu-item :index="'4'"><i class="el-icon-shopping-cart-full"></i><p class="bott">待开发票</p></el-menu-item></el-col>
                </el-row>
              <!-- <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-menu-item index="1">处理中心</el-menu-item> -->
                 </el-menu>
                <!-- 验收申请单 -->
                <div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import myhead from './redhead.vue'
export default {
  data () {
    return {
      ms: '采购代办',
      mag: ''
    }
  },
  components: {
    myhead
  },
  methods: {

  }
}
</script>
<style >
.el-badge__content.is-fixed {
  position: absolute;
    top: 10PX;
    right: 24px;
    transform: translateY(-50%) translateX(100%);
}
.el-badge__content {
    background-color:#C81623;
    border-radius: 9px;
    font-size: 9px;
    height: 15px;
    line-height: 15px;
    border: none
}
 .el-menu-item{
     height: 70px;
     width: 92%;
     font-size:12px;
      text-align: center;
      transform: translate(4%,0);
      margin-top: 6px;
      margin-bottom: 6px;
      background-color: #F9F0F0;
 }
 .el-menu--horizontal .el-menu-item.is-active, .el-menu--horizontal .el-menu-item:hover {
    outline: 0;
    color: #303133;
    background: #DC5252;
    border: 3px dotted #F9F0F0
}
/* .el-menu--horizontal .el-menu-item:active{
not(.is-disabled):
   outline: 0;
    color: #303133;
    background: #DC5252;
    border: 3px dotted #F9F0F0
} */
 .el-row {
    background:#FFF8F8;
    margin: 9px 6px
}
 .bott{
   /* color:#000; */
   margin-top: -33px
 }
.el-menu-item [class^="el-icon-"] {
    font-size: 33px;
}
</style>
