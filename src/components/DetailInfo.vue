<!-- Halaman Detail Pengguna -->
<template>
    <div class="detail-info">
        <p>Nama：<span>{{userInfo.name}}</span></p>
        <p>Tanggal：<span>{{userInfo.date}}</span></p>
        <p>Alamat：<span>{{userInfo.address}}</span></p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            };
        },
        components: {},
        mounted() {
        },
        methods: {},
        computed: {
            userInfo () {
                return this.$store.state.userInfo;
            }
        },
        watch: {}
    };
</script>

<style lang="scss" scope>
    .detail-info {
        p:first-child{
            margin-top: 0;
        }
    }
</style>
