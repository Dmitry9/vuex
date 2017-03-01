export default {
    loadUsers(state, loadedUsers) {
        state.users = loadedUsers; 
    },
    deleteUser(state, user) {
        const formerUser = state.users.find(User => {
            return User.id == user.id;
        });
        state.users.splice(
            state.users.indexOf(formerUser), 1
        );
    },
    addUser(state, payload) {
        const newId = Date.now();
        state.users.push({
            id: payload.id,
            name: payload.name,
            password: payload.password
        });
    },
    editUser(state, newUser) {
        const editedUser = state.users.find(User => {
            return User.id == newUser.id;
        });
        editedUser.id = newUser.id
        editedUser.name = newUser.name;
        editedUser.password = newUser.password;
    },
    newRegistration(state, user) {
        state.registrations = [user];
    },
    cancelRegistration(state){
        state.registrations = [];
    }
}
