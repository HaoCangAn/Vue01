<template>
    <div class="qie">
        <el-tabs v-model="activeName" type="card" >
            <el-tab-pane label="待提交" name="first">
                <chaxun/>
                <tb/>
            </el-tab-pane>
            <el-tab-pane label="我的单据" name="second">
              <myd/>
            </el-tab-pane>
            <el-tab-pane label="所有单据" name="third">
              <myd/>
            </el-tab-pane>
         </el-tabs>
    </div>
</template>

<script>
import chaxun from './change.vue'
import myd from './post.vue'
import tb from './ktab'
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  components: {
    chaxun,
    myd,
    tb
  }
}
</script>

<style >
.qie{
    margin: 11px 10px;
}
.el-tabs__item:hover {
    cursor: pointer;
}
.el-tabs__item.is-active {
    color:#F30808;
    border-top: 3px solid #D71921;
}
</style>
