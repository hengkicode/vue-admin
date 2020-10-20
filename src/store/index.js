import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * Manajemen status global vuex
 * @param options {Array} Array digunakan untuk merender tab
 */
const store = new Vuex.Store({
    state: {
        options: [],
        activeIndex: '/user',
        userInfo: {}
    },
    mutations: {
        // Tambahkan Tabs
        add_tabs(state, data) {
            this.state.options.push(data);
        },
        // Hapus Tabs
        delete_tabs(state, route) {
            let index = 0;
            for (let option of state.options) {
                if (option.route === route) {
                    break;
                }
                index++;
            }
            this.state.options.splice(index, 1);
        },
        // Setel Tab Yang Sedang Aktif
        set_active_index(state, index) {
            this.state.activeIndex = index;
        },
        // Tetapkan Detail
        save_detail_info(state, info) {
            this.state.userInfo = info;
        }
    }
});

export default store;