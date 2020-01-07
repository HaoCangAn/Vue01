<template>
    <div>
        <div class="yi">
          <el-button type="danger" circle></el-button> <span>超时</span>
           <el-button type="success" circle></el-button>  <span>正常</span>
        </div><!-- @selection-change="handleSelectionChange" -->
    <div class="ctable">
        <el-table
            ref="multipleTable"
           :data="people.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            tooltip-effect="dark"
            style="width: 100%"
            max-height="320"
            border>
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="name0"
            label="状态"
            width="90"
           ><el-button type="danger" circle></el-button>
            </el-table-column>
            <el-table-column
            prop="id"
            label="采购申请编号"
            width="160">
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
            prop="type"
            label="单据类型"
            width="100">
            </el-table-column>
            <el-table-column
            prop="type1"
            label="采购类型"
            width="100">
            </el-table-column>
             <el-table-column
            type="selection"
            width="55"><el-checkbox label=" " style="padding-left: 6px;"></el-checkbox>
            </el-table-column>
            <el-table-column
            prop="supplier"
            label="供应商"
            width="120">
            </el-table-column>
              <el-table-column
            prop="addis"
            label="到货地址"
            width="120">
            </el-table-column>
            <el-table-column
            prop="time"
            label="单据日期"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            prop="money"
            label="单据金额"
            width="120">
            </el-table-column>
            <el-table-column
            prop="compters"
            label="公司"
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
      panduan: '',
      buer: ' ',
      tableData: [],
      multipleSelection: [],
      people: [],
      resu: []
    }
  },
  props: ['search'],
  methods: {

  },
  async created  () {
    let resu = await this.$ajax.get('peoples', this.people)
    this.people = resu.data.userInfo
    // console.log(resu)
  }
  // created () {
  //   axios
  //     .get('http://127.0.0.1:7300/mock/5e0abca686d07b2ec0cb3d02/mft/peoples')
  //     .then(response => (this.info = response.data.userInfo, console.log(response)))
  //     .catch(function (error) { // 请求失败处理
  //       console.log('error')
  //     })
  // }
}
</script>

<style >
.yi{
  margin-left: 22px
}
.el-button.is-circle {
    padding: 8px;
    border-radius: 50%;
}
.el-button--danger {
background-color:#D71921;
border-color:#D71921;
}
.ctable{
    margin: 10px 8px 10px 8px
}
.el-table--enable-row-transition .el-table__body td {
    text-align: center;
}
.el-table td, .el-table th.is-leaf {
    text-align: center;
}
.el-table .cell {
    font-size: 13px;
}
</style>
