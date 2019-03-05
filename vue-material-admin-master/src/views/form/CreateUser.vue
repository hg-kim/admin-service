<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="User Registeration">
            <div slot="widget-content">
              <form
                name="user-registeration-form"
                autocomple="off">
              <v-container>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Name</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      label="Name"
                      v-model="name"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>E-mail</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      label="Email"
                      v-model="email"
                    ></v-text-field>
                  </v-flex>
                </v-layout>                  
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Password</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                      autocomplete="new-password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  
                <br>
                <v-btn color="orange" outline="" flat @click="post">Create User</v-btn>
              </v-container>
              </form>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget'
import UserService from '@/services/UserService'

export default {
  components: {
    VWidget
  },
  data () {
    return {
      email: '',
      name: '',
      password: '',
      error: null
    }
  },
  methods: {
    async post() {
      try {
      const response = await UserService.post({
        email: this.email,
        name: this.name,
        password: this.password
      })
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
          name: 'Users'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>