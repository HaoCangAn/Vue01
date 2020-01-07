<template>
    <div>
        <div class="yi">
          <div class="ll"><el-button type="danger" circle></el-button></div> <div class="ll">超时</div>
          <div class="ll"> <el-button type="success" circle></el-button></div>  <div class="ll">正常</div>
        </div><!-- @selection-change="handleSelectionChange" -->
        <!-- 表格 -->
    <div class="ctable">
        <el-table
            ref="multipleTable"
           :data="people.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            tooltip-effect="dark"
            style="width: 100%"
            border>
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="name0"
            label="状态"
            width="90"
           ><template slot-scope="scope">
            <el-button type="danger" circle v-if="scope.row.name0"></el-button>
            <el-button type="success" circle v-else></el-button>
            <!-- <el-switch
            v-model="scope.row.name0"></el-switch> -->
            </template>
            </el-table-column>
            <el-table-column
            prop="id"
            label="采购申请编号"
            width="160">
            <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column
            prop="name"
            label="申请人"
            width="100">
            </el-table-column>
            <el-table-column
            prop="time"
            label="审批通过日期"
            show-overflow-tooltip>
            </el-table-column>
             <el-table-column
            type="selection"
            width="55"><el-checkbox label=" " style="padding-left: 6px;"></el-checkbox>
            </el-table-column>
            <el-table-column
            prop="job"
            label="公司"
            width="120">
            </el-table-column>
            <el-table-column
            prop="job"
            label="公司到货地址"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="备注"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="项目"
            width="120">
            </el-table-column>
            <el-table-column
            prop=" "
            label="是否已询价"
            width="120"><span >否</span>
            </el-table-column>
        </el-table>
    </div>
    <!-- 分页 -->
    <div class="fy">
      <span >总共{{pg*nums}}条记录，共{{pg}}页 跳转到</span>
      <input class="in" v-model="value" value=" "/>
      <span>页</span><button @click="change" @click.down="getlist">确定</button>
      <button @click.down="cut" @click="getlist">上一页</button>
      <button @click="add" @click.down="getlist">下一页</button>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      pg: 1,
      nums: 6,
      panduan: '',
      buer: ' ',
      tableData: [],
      multipleSelection: [],
      people: [],
      resu: []
    }
  },
  props: ['search'],
  created () {
    this.getlist()
  },
  methods: {
    add () {
      this.pg++
    },
    cut () {
      this.pg--
    },
    change () {
      this.pg = this.value
    },
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
.ll{
  display: flex;
  float: left;
  margin-left: 3px;
  margin-bottom: 10px
}
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
/* 分页 */
.fy{
  margin: 10px 9px;
}
.in{
  width: 25px;
  text-align: center;
}
</style>
