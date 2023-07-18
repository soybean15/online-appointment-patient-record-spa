<template>
  <div class="">
    <div
      class="row m-3 bg-surface rounded-md shadow-sm justify-between items-center"
    >
      <q-input dense rounded standout v-model="text" label="Search" class="m-2">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>

        <template v-slot:append>
          <q-icon name="close" class="cursor-pointer" />
        </template>
      </q-input>

      <AddServiceDialogVue
        v-slot:default="{ onClick }"
       
      >
        <q-btn
          color="primary"
          icon="add_circle"
          rounded
          class="p-3 mx-3 text-sm"
          dense
          size="13px"
          label="New Service"
          @click="onClick"
        />
      </AddServiceDialogVue>
    </div>

    <div class="q-pa-md">
      <q-table title="Services" :rows="rows" :columns="columns" row-key="name">
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <AddServiceDialogVue
              v-slot:default="{ onClick }"
            
            >
              <q-btn icon="mode_edit" @click="onClick(props.row)"></q-btn>
            </AddServiceDialogVue>

            <ConfirmDialog  >

              <template v-slot:button="{ open }">
                <q-btn icon="delete" @click="open"></q-btn>
              </template>

              <template v-slot:title>
               <div > Delete Service</div>
              </template>
              <template v-slot:prompt>
               <div class="p-2">{{`Are you sure you want to delete ${props.row.name}?`}}</div>
              </template>  
              
              <template v-slot:actions="{close}">
                <div class="row">

                  <q-btn color="secondary" label="Delete" />
                  <q-btn @click="close" color="red" label="Cancel" />

                </div>
              </template>


            </ConfirmDialog>
           
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from "@/store/admin";
import { onMounted, ref } from "vue";

import AddServiceDialogVue from "./dialog/AddServiceDialog.vue";
import ConfirmDialog from "@/components/ConfirmDialog.vue";

export default {
  components: { AddServiceDialogVue,ConfirmDialog },
  setup() {
    const adminStore = useAdminStore();
    const serviceStore = adminStore.serviceStore;
    const persistent = ref(false);

    const rows = ref([]);
    const columns = [
      {
        name: "name",
        required: true,
        label: "Service Name",
        align: "left",
        sortable: true,
        field: (row) => row.name,
        format: (val) => `${val}`,
      },
      {
        name: "price",
        required: true,
        label: "Price",
        sortable: true,
        align: "right",
        field: (row) => row.price,
        format: (val, row) => `${row.currency_symbol}${val}`,
      },
      {
        name: "actions",
        required: true,
        label: "Actions",
        align: "center",
      },
    ];
    onMounted(async () => {
      await serviceStore.getServices();
      rows.value = serviceStore.services.map((row) => ({
        ...row,
        actions: [],
      }));

      console.log(rows);
    });

    return {
      serviceStore,
      columns,
      rows,
      onEdit: (row) => {
        console.log(row);
      },
      onDelete: (row) => {},
      persistent,
    };
  },
};
</script>

<style>
</style>