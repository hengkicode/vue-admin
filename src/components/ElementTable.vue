<!-- Komponen Manajemen Pengguna -->
<template>
    <div class="user-wrap">
        <el-table
            :data="tableData">
            <template v-for="column in tableColumns">
                <el-table-column
                    v-bind:key="column.id"
                    :label="column.label"
                    :prop="column.prop">
                </el-table-column>
            </template>
            <el-table-column
                label="Action"
                prop="">
                <template scope="scope">
                    <el-button type="text" @click="onBtnDetailClick(scope.row)">Detail</el-button>
                    <el-button type="text">Hapus</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: 'Hengki',
                    address: '上海市普陀区金沙江路 1518 弄'
                  }, {
                    date: '2016-05-04',
                    name: '王小虎二',
                    address: '上海市普陀区金沙江路 1517 弄'
                  }, {
                    date: '2016-05-01',
                    name: '王小虎三',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }, {
                    date: '2016-05-03',
                    name: '王小虎四',
                    address: '上海市普陀区金沙江路 1516 弄'
                  }],
                tableColumns: [
                    { label: 'Tanggal', prop: 'date'},
                    { label: 'Nama', prop: 'name'},
                    { label: 'Alamat', prop: 'address'}
                ]
            };
        },
        components: {},
        mounted() {},
        methods: {
            onBtnDetailClick (row) {
                // 1. Detail Pengguna di Simpan di Vuex
                this.$store.commit('save_detail_info', row);
                // 2. Secara Dinamis Mengubah Arah rute
                this.$router.push({path: `/userInfo/${row.name}`});
            }
        },
        computed: {},
        watch: {}
    };
</script>
