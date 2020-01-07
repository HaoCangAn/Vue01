<template>
      <div class="block">

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
     v-model="c"
     >总共{{c}}条记录，工{{c}}页
    </el-pagination>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage4: 4,
      c: 3
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
