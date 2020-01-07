<template>
    <div>
        <div class="qie">
        采购类型：<el-select v-model="value" placeholder="请选择" size="small" >
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" focus>
                    </el-option>
                </el-select>
        协议供应商：<el-input size="small" v-model="po" suffix-icon="el-icon-search"></el-input>
        成本中心：<el-input size="small" suffix-icon="el-icon-search"></el-input>
        申请日期：<el-date-picker
                      type="date"
                      v-model="value1"
                      placeholder="选择日期"
                      format="yyyy / MM / dd /" size="small">
                    </el-date-picker>
                    TO
                    <el-date-picker
                      type="date"
                      v-model="value2"
                      placeholder="选择日期"
                      format="yyyy / MM / dd /" size="small">
                    </el-date-picker>
        </div>
        <div class="qie">
            项目：<el-input size="small" suffix-icon="el-icon-search"></el-input>
            <el-button type="warning">查询</el-button>
            <el-button type="warning">新增</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      po: '',
      value: '',
      value1: '',
      value2: '',
      options: [{
        value: '1',
        label: '固定资产'
      },
      {
        value: '2',
        label: '低值易耗'
      }]
    }
  }
}
</script>

<style >
.el-date-editor.el-input {
    width: 160px;
}
.el-input__inner::placeholder {
    color: rgb(0, 0, 0);
}
.el-input__prefix {
    left: 86%;
}
.el-select > .el-input {
    width: 100%;
}
.el-input {
    width: 13%;
}
.sech{
    margin: 6px 10px
}
.el-button--warning {
    color:#FFF;
    background-color:
    #D41B20;
    width: 85px;
    height: 36px;
    margin-left: 7px;
}
</style>
