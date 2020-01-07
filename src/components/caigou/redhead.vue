<template>

    <div>
        <li class="carTit" >
            <span >{{title}}</span>
        </li>
    </div>

</template>

<script>
export default {

  data () {
    return {
      msg: ''
    }
  },
  props: ['title']
}
</script>

<style scoped>
.carTit {
    height: 43px;
    width: 100%;
    border-bottom: 1px solid
    #ccc;
    position: relative;
}
.carTit span {
    font-size: 15px;
    color: #333;
    line-height: 35px;
    padding: 0 13px;
    border-bottom: 2px solid#d71921;
    position: absolute;
    top: 7px;
    z-index: 8
}
ul,ol{
 list-style:none;
}
*{
    padding:0;
    margin:0;
/* box-sizing:border-box;//忽略边距 */
 }
</style>
