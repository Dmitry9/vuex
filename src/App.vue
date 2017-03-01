<template>
    <div id="app">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo right">Logo</a>
            <ul id="nav-mobile"> 
                <router-link tag="li" active-class="active" to="/" exact><a>Login form</a></router-link></li>
                <router-link tag="li" active-class="active" to="/admin-page"><a>Admin page</a></router-link></li>
            </ul>
          </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
  import router from './components/router';
  import Registration from './components/Registration.vue';
  import Registrations from './components/Registrations.vue';
  import LoginForm from './components/LoginForm.vue';
  import AdminPage from './components/AdminPage.vue';

export default {
    components: {
        appRegistration: Registration,
        appRegistrations: Registrations
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
