<template>
  <div>
    <form id="form" v-show="formShow" method="GET" action="./#admin-page"
        @submit.prevent="onSubmit">
		<h1>Login</h1>
		<input v-model="nameAtempt" placeholder="Username" type="text" required>
		<input v-model="passAtempt" placeholder="Password" type="password" required>
        <button>Submit</button>
	</form>
    <div v-show="missmatch" class="row">
        <div class="container martop">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Please try again.</span>
              <p>Sorry, your login or password does not have access to the Admin page.</p>
            </div>
            <div class="card-action">
              <a @click="back">Take me back</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        mounted(){
            if(!this.usersLoaded){
                this.$store.dispatch('loadUsers');
                this.usersLoaded = true;
            }
        },
        data(){
            return {
                nameAtempt: '',
                passAtempt: '',
                missmatch: false,
                usersLoaded: false
            }
        },
        computed:{
            formShow(){
                return !this.missmatch;
            }
        },
        methods: {
            onSubmit() {
                const match = this.$store.getters.Users.find(
                     user => this.nameAtempt == user.name
                 );
                if (!match){
                    this.missmatch = true;
                    this.nameAtempt = '';
                    this.passAtempt = '';
                }else{
                   const exact = this.$store.getters.Users.find(
                       user => this.passAtempt == user.password
                   );
                   if(exact){
                       this.$store.commit('newRegistration', exact);
                       location.href = "./#admin-page";
                       return;
                   }
                   this.missmatch = true;
                   this.nameAtempt = '';
                   this.passAtempt = '';
                }
            },
            back(){
                this.missmatch = !this.missmatch;
            }
        },
    }
</script>

<style scoped>
    .martop{
        margin-top: 60px;
    }
    a{
        cursor: pointer;
    }
    h1 {
    height: 100px;
    width: 100%;
    font-size: 30px;
    background: #18aa8d;
    color: white;
    line-height: 150%;
    border-radius: 3px 3px 0 0;
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.2);
    }

    form {
    box-sizing: border-box;
    width: 300px;
    margin: 100px auto 0;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    padding-bottom: 40px;
    border-radius: 3px;
    }
    form h1 {
    box-sizing: border-box;
    padding: 20px;
    }

    input {
    margin: 40px 25px;
    width: 250px;
    display: block;
    border: none;
    padding: 10px 0;
    border-bottom: solid 1px #1abc9c;
    -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
          transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 96%, #1abc9c 4%);
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 96%, #1abc9c 4%);
    background-position: -250px 0;
    background-size: 250px 100%;
    background-repeat: no-repeat;
    color: #0e6252;
    }
    input:focus, input:valid {
    box-shadow: none;
    outline: none;
    background-position: 0 0;
    }
    input:focus::-webkit-input-placeholder, input:valid::-webkit-input-placeholder {
    color: #1abc9c;
    font-size: 11px;
    -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
    visibility: visible !important;
    }

    button {
    border: none;
    background: #1abc9c;
    cursor: pointer;
    border-radius: 3px;
    padding: 6px;
    width: 200px;
    color: white;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
    }
    button:hover {
    -webkit-transform: translateY(-3px);
      -ms-transform: translateY(-3px);
          transform: translateY(-3px);
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
    }
    input:focus::-webkit-input-placeholder, input:valid::-webkit-input-placeholder {
    color: #1abc9c;
    font-size: 11px;
    -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
    visibility: visible !important;
    }
</style>
