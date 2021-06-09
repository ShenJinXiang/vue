<template>
  <div class="cwsw-table-con">
    <h4>{{ title }}</h4>
    <el-table :data="dyArr" style="width: 100%">
      <el-table-column prop="WT_BT" label="标题" > </el-table-column>
      <el-table-column prop="WT_LX_MC" label="类型" > </el-table-column>
      <el-table-column prop="DJS" label="点击数"> </el-table-column>
      <el-table-column prop="FBSJ" label="发布时间"> </el-table-column>
      <el-table-column prop="WT_SJ" label="提问时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { postAxios } from '@/lib/http';

export default {
  name: 'CsswTable',
  data() {
    return {
      title: '答疑列表',
      dyArr: [],
    };
  },
  created() {
    postAxios('/question/dypage', {
      pageNumber: 1,
      pageSize: 10,
    }).then((response) => {
      const { data } = response;
      if (data && data.code === '0000') {
        this.dyArr = data.data.list;
      }
    });
  },
};
</script>
