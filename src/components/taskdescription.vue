<template>
  <div class="row">
    <form class="col s12" @change.prevent="onDescrSubmit">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" v-model="localTaskDescr"></textarea>
          <label for="textarea1">Description</label>
          <!-- <span>{{ localTaskDescr }}</span> -->
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'taskdescription',
  props: {
    taskDescr: String
  },
   data() {
    return {
      localTaskDescr: null
    }
  },
  methods: {
      onDescrSubmit() {
      console.log("emit from taskdescription.vue")
      let taskDescr = {
        localTaskDescr: this.localTaskDescr
      }
      if (this.localTaskDescr != null) {
        this.$emit('descr-created', taskDescr)
      }
    }
  }
}
</script>
