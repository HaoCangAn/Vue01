<template>
    <div>
        <div class="ctable">
        <el-table
            ref="multipleTable"
           :data="people.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            tooltip-effect="dark"
            style="width: 100%"
            border>
            <el-table-column
            prop=" "
            label="操作"
            width="90"
           ></el-table-column>
            <el-table-column
            prop="id"
            label="框架协议号"
            width="160">
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
            prop="name"
            label="采购类型"
            width="100">
            </el-table-column>
            <el-table-column
            prop="time"
            label="审核状态"
            show-overflow-tooltip>
            </el-table-column>
             <!-- <el-table-column
            type="selection"
            width="55"><el-checkbox label=" " style="padding-left: 6px;"></el-checkbox>
            </el-table-column> -->
            <el-table-column
            prop="job"
            label="下一级审批人"
            width="120">
            </el-table-column>
            <el-table-column
            prop="job"
            label="单据日期"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="协议供应商"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="成本中心"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="公司"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="项目"
            width="120">
            </el-table-column>
        </el-table>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pg: 1,
      nums: 6,
      search: '',
      tableData: [],
      people: []
    }
  },
  created () {
    this.getlist()
  },
  methods: {
    async getlist  () {
      let resu = await this.$ajax.get('/users', {
        params: {
          page: this.nums,
          pageSize: this.nums
        }
      }, this.people)
      this.people = resu.data.data
    }
  }
}
</script>

<style scoped>

</style>
