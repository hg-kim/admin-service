<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="User Registeration">
            <div slot="widget-content">
              <v-container>
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>E-mail</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      label="E-mail"
                      name="email"
                      v-model="email"
                      :rules="[rules.required, rules.email]"
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
                      name="password"
                      type="password"
                      v-model="password"
                      :rules="[rules.required, rules.email]"
                    ></v-text-field>
                  </v-flex>
                </v-layout>  
                <br>
                 <v-btn color="success" outline="" @click="register">Register</v-btn>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
import AuthenticationService from '@/services/AuthenticationService'

export default {
  components: {
    VWidget
  },
  data () {
    return {
      email: '',
      password: '',

      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        }    
      }  
    };
  },
  computed: {
  },  
  methods: {
    async register() {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(reponse.data)
    }
  }
};
</script>