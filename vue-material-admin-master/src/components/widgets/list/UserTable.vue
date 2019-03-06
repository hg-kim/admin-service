<template>
  <v-card>
    <v-toolbar card color="white">
              <v-text-field
              flat
              solo
              prepend-icon="search"
              placeholder="Type something"
              v-model="search"
              hide-details
              class="hidden-sm-and-down"
              ></v-text-field>     
              <v-btn icon
                @click="navigateTo({name: 'users-create'})">
                <v-icon>person_add</v-icon>
              </v-btn>         
            </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
              <v-data-table
                :headers="headers"
                :search="search"
                :items="users"
                :rows-per-page-items="[10,25,50,{text:'All','value':-1}]"
                class="elevation-1"
                item-key="email"
                >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.name }}</td>            
                  <td>{{ props.item.email }}</td>
                  <td>{{ $moment(props.item.createdAt).format("YYYY.MM.DD") }}</td>
                  <td>{{ $moment(props.item.updatedAt).format("YYYY.MM.DD") }}</td>
                  <td>
                    <v-btn depressed outline icon fab dark color="primary" small
                      @click="navigateTo({
                        name: 'user-edit',
                        params: {
                          userId: props.item.id
                        }
                      })">
                      <v-icon>edit</v-icon>
                    </v-btn>
                    <v-btn depressed outline icon fab dark color="pink" small>
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </td>
                </template>
                
              </v-data-table>
            </v-card-text>
  </v-card>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  props: [
    'user'
  ],
  data () {
    return {
      search: '',
        headers: [
          {
            text: 'Name',
            value: 'name'
          },
          {
            text: 'Email',
            value: 'email'
          },
          {
            text: 'CreatedAt',
            value: 'createdAt'
          },
          {
            text: 'UpdatedAt',
            value: 'updatedAt'
          },
          {
            text: 'Action',
            value: ''
          },
        ],
        users: []
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.users = (await UserService.index()).data
  }
}
</script>
