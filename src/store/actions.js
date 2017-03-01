import { loadUsers, createUser, saveUser, destroyUser, errors } from '../server/userService';

export default {
    // newRegistration({ commit }, user) {
    //     commit('newRegistration', user);
    // },
    loadUsers({ commit }) {
        loadUsers()
            .then( (users)=>{
                if (!errors) commit('loadUsers', users);
        })
    },
    addUser({ commit }, payload) {
        createUser(payload)
            .then( ()=>{
                if (!errors) commit('addUser', payload)
            })
    },
    deleteUser({ commit }, user) {
        destroyUser(user.id)
            .then( ()=>{
                if (!errors) commit('deleteUser', user);
            })
    },
    editUser({ commit }, payload) {
        const newUser = {
            id: payload.id,
            name: payload.name,
            password: payload.password
        };
        saveUser(newUser)
            .then( () => {
                if (!errors) commit('editUser',newUser);
            })
    }
}
