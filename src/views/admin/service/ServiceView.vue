<template>
  <div>
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

      <q-btn
        color="primary"
        icon="add_circle"
        rounded
        class="p-3 mx-3 text-sm"
        dense
        size="13px"
        label="New Service"
      />
    </div>

    <div class="q-pa-md">
      <q-table title="Services" :rows="rows" :columns="columns" row-key="name">
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn icon="mode_edit" @click="onEdit(props.row)"></q-btn>
            <q-btn icon="delete" @click="onDelete(props.row)"></q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
import { useAdminStore } from "@/store/admin";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const adminStore = useAdminStore();
    const serviceStore = adminStore.serviceStore;

    const rows = ref([]);
    const columns = [
      {
        name: "name",
        required: true,
        label: "Service Name",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
      },
      {
        name: "price",
        required: true,
        label: "Price",
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
        console.log(row)
      },
      onDelete: (row) => {},
    };
  },
};
</script>

<style>
</style>