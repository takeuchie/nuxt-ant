<template>
  <div>
    <a-row
      type="flex"
      justify="center"
      :style="{ padding: '5rem' }"
    >
      <a-card :style="{ width: '65rem', margin: '1rem' }">
        <!-- Left card (Steps) -->
        <a-card-grid
          style="width: 30%; text-align: center; background: #401c59"
          :hoverable="false"  :bordered="false"
        >
          <a-steps direction="vertical" :current="current" @change="onChange">
            <a-step title="Residence" />
            <a-step title="Income" />
            <a-step title="Equity" />
          </a-steps>
        </a-card-grid>
        <!-- Right Card (Form) -->
        <a-card-grid style="width: 70%;" :hoverable="false">
          <!-- Form Residence -->
          <template v-if="current === 0">
            <a-row type="flex">
              <h1 class="form-title">Add your state and filing status</h1>
            </a-row>
            <a-form-model
              layout="vertical"
              :model="form"
              :rules="rules"
              :style="{ margin: '1rem' }"
            >
              <a-form-model-item label="State:" prop="state">
                <!-- TODO: Componentize this -->
                <a-select
                  show-search
                  placeholder="Select State"
                  option-filter-prop="children"
                  style="width: 200px"
                  :filter-option="filterOption"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @change="handleChange"
                >
                  <a-select-option value="pennsylvania "
                    >Pennsylvania
                  </a-select-option>
                  <a-select-option value="newyork"> New York </a-select-option>
                </a-select>
              </a-form-model-item>
              <a-form-model-item label="Filing Status:" prop="state">
                <a-row :gutter="[5,5]" type="flex">
                  <a-col>
                    <label>
                      <input type="radio" name="state" class="form-group-radio" />
                      <a-card class="form-group-card" :hoverable="true">Single</a-card>
                    </label>
                  </a-col>
                  <a-col>
                    <label>
                      <input type="radio" name="state" class="form-group-radio" />
                      <a-card class="form-group-card" :hoverable="true">Married Joint</a-card>
                    </label>
                  </a-col>
                  <a-col>
                    <label>
                      <input type="radio" name="state" class="form-group-radio" />
                      <a-card class="form-group-card" :hoverable="true">Married Separate</a-card>
                    </label>
                  </a-col>
                  <a-col>
                    <label>
                      <input type="radio" name="state" class="form-group-radio" />
                      <a-card class="form-group-card" :hoverable="true">Head household</a-card>
                    </label>
                  </a-col>
                </a-row>
              </a-form-model-item>
            </a-form-model>
          </template>
          <!-- Form Income -->
          <template v-if="current === 1">
            <a-row type="flex">
              <h1 class="form-title">Add your income</h1>
            </a-row>

            <a-card :bordered="false" :style="{ width: '20rem', margin: '1rem' }">
              Your salary and withholdings information is used to populate
              the real-time dashboard.
            </a-card>

          </template>
          <!-- Form Equity -->
          <template v-if="current === 2">
            <a-row type="flex">
              <h1 class="form-title">Add your equity</h1>
            </a-row>

            <a-card :bordered="false" :style="{ width: '20rem', margin: '1rem' }">
              Your equity information is used within the real-time dashboard
              and can also be used when creating optimization scenarios.
            </a-card>
          </template>

          <!-- Next Button -->
          <a-row
            type="flex"
            :style="{ margin: '3rem 1rem' }"
          >
            <a-button type="primary" @click="goNext">Next Step</a-button>
          </a-row>
        </a-card-grid>
      </a-card>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      form: {
        state: "",
      },
      rules: {},
    };
  },
  methods: {
    goNext(){
      this.current = this.current >= 2 ? 2 : this.current+=1;
    },

    onChange(current) {
      console.log("onChange:", current);
      this.current = current;
    },

    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>

<style>
.ant-steps-item-title {
  color: white !important;
  text-align: left !important;
  display: block !important;
  margin-bottom: 3rem;
}

.form-group-card {
  width: 140px;
  height: 50px;
  padding-top: 1em;
  text-align: center;
}

.form-group-card:hover {
  cursor: pointer;
}

.form-group-radio {
  display: none;
}

.form-group-radio:checked + .form-group-card {
  border: 1px solid #23af9f;
  box-shadow: 0 0 4px rgba(35,175,159,.5);
  border-radius: 4px;
 }

.form-title {
  margin: 1rem;
  float: left;
}
</style>
