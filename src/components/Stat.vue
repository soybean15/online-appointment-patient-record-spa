<template>
  <div class="column bg-surface p-2 rounded-md shadow-lg" style="min-width: 10rem;" >
    <div class="row items-center">
        <q-icon :name="title.icon" />
        <span class="px-2">{{title.name}}</span>
    </div>

    <div class="pt-3 text-3xl ">{{value}}</div>

    <div class="py-2">
      <slot name="helper"> </slot>
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