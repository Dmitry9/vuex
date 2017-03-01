<template>
    <div id="registrations">
        <div class="summary">
            <h3 class="center">Account</h3>
        </div>
        <hr>
        <div class="row" v-for="registration in registrations">
            <h5>Name: {{ registration.name }}</h5>
            <h5>Password: {{ registration.password }}</h5>
            <h6 class="id left">Id: {{ registration.id }}</h6>
        </div>
        <a @click="logout" href="/# " class="btn">Logout</a>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        methods: {
            logout(){
                this.$store.commit('cancelRegistration');
            }
        },
        computed: {
            ...mapGetters({
                        registrations: 'registrations',
                        total: 'totalRegistrations'
                    })
        }
    }
</script>

<style scoped>
    #registrations {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 400px;
        vertical-align: top;
        text-align: left;
    }
    .id {
        display: inline-block;
        text-align: left;
        box-sizing: border-box;
    }
</style>
