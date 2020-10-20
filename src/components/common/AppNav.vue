<!-- Komponen Bilah Navigasi Menu Kiri -->

<template>
  <div class="app-nav-wrap">
    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
      <el-menu-item
        v-for="menu in menus"
        :index="menu.route"
        :key="menu.route">
        <i class="el-icon-menu"></i>{{menu.name}}
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        menus: [
          { route: '/', name: 'Home'},
          { route: '/user', name: 'User'},
          { route: '/psd', name: 'Password'},
          { route: '/salary', name: 'Gaji'},
          { route: '/attendence', name: 'Kehadiran'},
          { route: '/perform', name: 'Kinerja'},
          { route: '/admin', name: 'Admin'},
          { route: '/feedback', name: 'UmpanBalik'}
        ]
      }
    },
    mounted () {
      // Tambahkan rute saat ini sebagai tab saat refresh tabs
      if (this.$route.path !== '/' && this.$route.path.indexOf('userInfo') == -1) {
        this.$store.commit('add_tabs', {route: '/', name: 'Home'});
        this.$store.commit('add_tabs', {route: this.$route.path , name: this.$route.name });
        this.$store.commit('set_active_index', this.$route.path);
      } else {
        this.$store.commit('add_tabs', {route: '/', name: 'Home'});
        this.$store.commit('set_active_index', '/');
        this.$router.push('/');
      }

    },
    computed: {
      options () {
        return this.$store.state.options;
      }
    }
  }
</script>
