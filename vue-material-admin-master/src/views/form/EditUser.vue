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
                      v-model="user.name"
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
                      v-model="user.email"
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
                      v-model="user.password"
                      autocomplete="new-password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  
                <br>
                <v-btn color="orange" outline="" flat @click="save">Save User</v-btn>
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
      user: {
        email: null,
        name: null,
        password: null
      },
      error: null
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.user)
        .every(key => !!this.user[key])
      if( !areAllFieldsFilledIn) {
        this.error = 'Please fill in all the ruquired fields.'
        return
      }

       const userId = this.$store.state.route.params.userId
       
       console.log(userId)
       try {
         await UserService.put(this.user)
         this.$router.push({
           name: 'user',
           params: {
             userId: userId
           }
         })
       } catch (err) {
         console.log(err)
       }
    }
  },
  async mounted () {
    try {
      const userId = this.$store.state.route.params.userId
      this.user = (await UserService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>