<template>
  <div id="pageUsertable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex>
          <user-table></user-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/api';
import UserTable from '@/components/widgets/list/UserTable';
import Material from 'vuetify/es5/util/colors';
export default {
  components: {
    UserTable  
  }
};
</script>
