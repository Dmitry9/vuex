<template>
    <div id="registration">
        <h3>List of users</h3>
        <hr>
            <input v-show="showForm" v-model="newname" placeholder="name" required>
            <input v-show="showForm" v-model="newpass" placeholder="password" required>
            <a v-if="addMode" v-show="showForm" class="btn-floating btn-small right red" @click="addUser"><i class="small material-icons">add</i></a>
            <a v-if="editMode" v-show="showForm" class="btn-floating btn-small right green" @click="submitEdit"><i class="small material-icons">add</i></a>
        <div v-show="changeMode" class="row" v-for="user in users">
            <p class="left">Name: <span class="outline">{{ user.name }}</span></p>
            <p class="left">&nbsp;&nbsp;password: <span class="outline">{{ user.password }}</span></p>
            <a class="right mt" @click="editUser(user)"><i class="small material-icons">mode_edit</i></a>
            <a class="right mt" @click="deleteUser(user)"><i class="small material-icons">delete</i></a>
        </div>
            <a v-show="changeMode" class="btn-floating btn-small right red" @click="registerUser"><i class="small material-icons">add</i></a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                changeMode: true,
                addMode: true,
                newpass: '',
                newname: '',
                userToEdit: ''
            }
        },
        computed: {
            showForm(){
                return !this.changeMode;
            },
            editMode() {
                return !this.addMode;
            },
            users(){
                return this.$store.getters.Users;
            }
        },
        methods: {
            registerUser() {
                this.changeMode = false;
            },
            addUser(){
                if(!(this.newname && this.newpass)) return;
                const newId = Date.now();
                this.$store.dispatch('addUser', {
                    id: newId,
                    name: this.newname,
                    password: this.newpass
                });
                this.newname = '';
                this.newpass = '';
                this.changeMode = true;
            },
            deleteUser(user) {
                this.$store.dispatch('deleteUser', user);
            },
            editUser(user) {
                this.changeMode = false;
                this.addMode = false;
                this.userToEdit = user;
            },
            submitEdit() {
                if(!(this.newname && this.newpass)) return;
                this.$store.dispatch('editUser', {
                    id: this.userToEdit.id,
                    name: this.newname,
                    password: this.newpass
                });
                this.newname = '';
                this.newpass = '';
                this.addMode = true;
                this.changeMode = true;

            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 400px;
        vertical-align: top;
    }
    .outline{
        color: #ee6e73;
        font-size: 20px;
    }
    .material-icons{
        cursor: pointer;
    }
    .mt{
        margin-top: 10px;
    }
    .row{
        line-height: 20px;
    }
    .material-icons:hover {
        color: coral;
    }
</style>
