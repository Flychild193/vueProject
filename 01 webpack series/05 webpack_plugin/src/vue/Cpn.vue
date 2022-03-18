<template>
<div>
  <h2>i am cpn component's title</h2>
  <p>i am cpn component's content</p>
  <h2>{{name}}</h2>
</div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      name: 'CPN component name'
    }
  }
}
</script>

<style scoped>

</style>