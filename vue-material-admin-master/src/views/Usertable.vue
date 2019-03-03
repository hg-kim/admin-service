<template>
  <div id="pageUsertable">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex>
          <plain-table></plain-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from '@/api';
import PlainTable from '@/components/widgets/list/PlainTable';
import Material from 'vuetify/es5/util/colors';
export default {
  components: {
    PlainTable  
  }
};
</script>
