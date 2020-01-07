<template>
    <div>
        <div class="sech">
        采购单据号：<el-input  size="small"></el-input>
        采购类型：<el-select v-model="value3" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
        供应商：<el-input size="small" suffix-icon="el-icon-search"  v-model="pp"></el-input>
        成本中心：<el-input size="small" suffix-icon="el-icon-search"></el-input>
         单据类型：<el-select v-model="value4" placeholder="请选择" size="small">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
        </div>
        <div class="sech">
        项目：<el-input size="small" suffix-icon="el-icon-search"></el-input>
        单据日期：<el-date-picker
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
        采购员：<el-select v-model="value" placeholder="秦静婷(112655)" size="small">
                <el-option
                v-for="ite in peopers"
                :key="ite.value"
                :label="ite.label"
                :value="ite.value">
                </el-option>
            </el-select>
        <el-button type="warning" @click="send()">查询</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pp: '',
      value3: '',
      value4: '',
      value1: '',
      value2: '',
      value: '',
      options: [{
        value: '1',
        label: '固定资产'
      },
      {
        value: '2',
        label: '低值易耗'
      }],
      peopers: [{
        value: '小熊',
        label: '小王'
      }]
    }
  },
  methods: {
    send () {
      this.$emit('giveName', this.pp)
    }
  }
}
</script>

<style >
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
    background-color:#D41B20;
    width: 85px;
    height: 36px;
    margin-left: 7px;
}
.el-button--warning:active,.el-button--warning:focus,.el-button--warning:hover {
    background: #D41B20;
    border-color:#D41B20;
    color: #FFF;
}
</style>
