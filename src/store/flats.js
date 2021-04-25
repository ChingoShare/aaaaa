import axios from 'axios'
import { FlatsService } from "@/services/flats.service";

const flatsService = new FlatsService();

export const flats = {
    namespaced: true,
    state: {
        items: [],
        loading: false
    },
    mutations: {
        set(state, data) {
            state.items = [ ...data ];
        },
        loading(state, loading) {
            state.loading = loading;
        },
        like(state, { id, value }) {
            state.items.find(item => item.id === id).like = value;
        }
    },
    actions: {
        get({ commit }) {
            commit('loading', true);
            flatsService.getFlats()
                .then(flats => {
                    commit('loading', false);
                    commit('set', flats);
                })
        },
        like({ commit }, { id, value }) {
            commit('like', { id, value });
        }
    }
}
