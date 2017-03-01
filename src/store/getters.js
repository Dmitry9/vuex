export default {
    Users(state) {
        return state.users;
    },
    registrations(state) {
        return state.registrations;
    },
    totalRegistrations(state) {
        return state.registrations.length;
    }
}
