(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b39e9"],{"28c0":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container",attrs:{id:"data9"}},[a("div",{staticStyle:{margin:"15px 0"}}),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e._m(0)]),a("div",{staticClass:"text item"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData1,border:"",fit:!0,"cell-style":e.set_cell_style}},[a("el-table-column",{attrs:{prop:"type",label:"消息交易异常"}}),a("el-table-column",{attrs:{prop:"name",label:"二级异常名称"}}),a("el-table-column",{attrs:{prop:"super",label:"能力"}}),a("el-table-column",{attrs:{prop:"errNum",label:"报错量"}})],1)],1),a("div",{staticClass:"block pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-size":10,layout:"total, prev, pager, next, jumper",total:e.myArr1.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage4=t},"update:current-page":function(t){e.currentPage4=t}}})],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("h3",[e._v("消息交易")])])}],l={data:function(){return{totol:2e3,tableData1:[{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"},{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"},{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"}],myArr1:[{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"},{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"},{type:"消息交易异常",name:"发起方组件认证失败",super:"能力1",errNum:"100"}],input5:"",select:"",value1:"",currentPage4:1,showSearchAll:!1}},methods:{set_cell_style:function(e){e.row;var t=e.column;e.rowIndex,e.columnIndex;return"下游地址"===t.label?"font-size:7px":"font-size:10px"},celldblclick:function(e,t,a,r){if("下游地址"===t.label){this.$copyText(e[t.property]).then((function(e){alert("复制成功"),console.log(e)}),(function(e){console.log(e)}))}}}},c=l,s=a("9ca4"),u=Object(s["a"])(c,r,n,!1,null,"498ce81e",null);t["default"]=u.exports}}]);