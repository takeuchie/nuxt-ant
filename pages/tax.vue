<template>
  <div>
    <h1></h1>

    <a-row>
      <a-form-model
        layout="vertical"
        :model="form"
        @submit="handleSubmit"
        @submit.native.prevent
      >
        <a-form-item label='Fair Market Value'>
          <a-input
              type="number"
              size="large"
              v-model="form.marketValue"
            >
          </a-input>
        </a-form-item>

        <a-form-item label='Quantity'>
          <a-input
              type="number"
              size="large"
              v-model="form.quantity"
            >
          </a-input>
        </a-form-item>

        <a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              block
            >
              Refresh
            </a-button>
          </a-form-model-item>
      </a-form-model>
    </a-row>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          marketValue: 0,
          quantity: 0,
        }
      }
    },
    methods: {
      async handleSubmit(e) {

    },
    }
  }
</script>

<style>

</style>
