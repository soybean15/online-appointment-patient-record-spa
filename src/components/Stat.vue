<template>
  <div class="column bg-surface w-full p-2 rounded-md shadow-lg" style="min-width: 15rem;" >
    <div class="row items-center">
        <q-icon :name="title.icon" />
        <span class="px-2">{{title.name}}</span>
    </div>

    <div class="pt-3 text-3xl ">{{value}}</div>
    <div class="row items-center py-2">

        <q-icon size="20px" color="green" name="arrow_drop_up" /> 
        <div class="text-xs font-secondary">20% increase this week</div>
    </div>
  </div>
</template>

<script>
export default {
    props:['title','value']

}
</script>

<style>

</style>