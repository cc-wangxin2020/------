<script>
import {ref} from 'vue'
export default {
  props:{
    obj:{type:Object}
  },
  setup(props, context) {
    console.log(props);
    console.log(context.attrs);
    const count = ref(0)
    return {
      count,
      props
    }
  },
  mounted() {
    console.log(this);
    console.log(this.count);
  }
}
</script>

<template>
  <h2>{{ props.obj.id}} -- {{ props.obj.name}}--{{ props.obj.address }}</h2>
  <h2>{{ count }}</h2>
  <button @click="count++">点击</button>
</template>
