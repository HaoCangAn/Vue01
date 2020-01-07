<template>
    <div>
        <el-tabs v-model="activeName" type="card" >
            <el-tab-pane label="采购申请单" name="first">
              <div>
                <search @giveName="getName"></search>
                <tabc :search="chuan"></tabc>
              </div>
            </el-tab-pane>
            <el-tab-pane label="采购申请明细" name="second">
              <div>
                <mxss/>
              <tabc/>
              </div>
            </el-tab-pane>
         </el-tabs>
    </div>
</template>

<script>
import search from './cgshenqin.vue'
import tabc from './ctable.vue'
import mxss from './mingxi/sousuo.vue'
export default {
  data () {
    return {
      activeName: 'first',
      chuan: ''
    }
  },
  components: {
    tabc,
    search,
    mxss
  },
  methods: {
    getName (data) {
      this.chuan = data
    }
  }
}
</script>

<style >
.el-tabs__item:hover {
    cursor: pointer;
}
.el-tabs__item.is-active {
    color:#F30808;
    border-top: 3px solid #D71921;
}
</style>
