<template>
    <div>
       <myhead :title="masg"></myhead>
       <qiehaun/>

    </div>
</template>

<script>
import myhead from '../caigou/redhead.vue'
import qiehaun from './qiehuan.vue'

export default {
  data () {
    return {
      masg: '框架协议'
    }
  },
  components: {
    myhead,
    qiehaun
  }
}
</script>

<style>
</style>
