<template>
  <a-row type="flex" justify="center" :style="{ padding: '5rem' }">
    <a-card :style="{ width: '65rem', margin: '1rem' }">
      <a-form-model :model="form" @submit="handleSubmit" @submit.native.prevent>
        <a-form-item label="Fair Market Value">
          <a-input-number
            addon-before="$"
            :min="0.01"
            :formatter="
              (value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            v-model="form.marketValue"
            style="width: 190px"
          />
        </a-form-item>

        <a-form-item label="Quantity">
          <a-input-number
            :min="1"
            :formatter="
              (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            "
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            v-model="form.quantity"
            style="width: 190px"
          />
        </a-form-item>

        <a-form-model-item>
          <a-button type="primary" html-type="submit"> Refresh </a-button>
        </a-form-model-item>
      </a-form-model>
      <a-row>
        <a-input
          :disabled="true"
          :formatter="
            (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          "
          :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
          v-model="result"
          style="width: 300px"
        />
      </a-row>
    </a-card>
  </a-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        marketValue: 1,
        quantity: 10,
      },
      result: null,
    };
  },
  methods: {
    async handleSubmit(e) {
      const { marketValue, quantity } = this.form
      const baseUrl = process.env.baseUrl
      const url = `${baseUrl}/securities`;
      const postData = { fair_market_value: marketValue, quantity }
      try {
        const { data } = await axios.post(url, postData)
        if (data) this.result = `$ ${data}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } catch (error) {
        console.info(error.message || error.stack);
        this.result = error.message || error.stack
      }
    },
  },
};
</script>

<style>
</style>
