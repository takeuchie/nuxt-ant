<template>
  <section>
    <a-row
      type="flex"
      justify="center"
      align="middle"
      :style="{ marginTop: '13rem' }"
    >
      <div class="logo">
        <Logo />
      </div>
    </a-row>

    <a-row
      type="flex"
      justify="center"
      align="middle"
      :style="{ marginTop: '1rem' }"
    >
      <a-card :style="{ width: '40rem', margin: '1rem' }">
        <h1 align="center">Welcome Back</h1>
        <a-form-model
          layout="vertical"
          :model="form"
          :rules="rules"
          @submit="handleSubmit"
          @submit.native.prevent
          :style="{ margin: '3rem 5rem' }"
        >
          <a-form-model-item label="Email Address" prop="email">
            <a-input
              type="email"
              size="large"
              v-model="form.email"
              placeholder="Email Address"
            >
              <a-icon
                slot="prefix"
                type="mail"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-model-item>

          <a-form-model-item label="Password" prop="password">
            <a-input-password
              v-model="form.password"
              placeholder="Password"
              size="large"
            >
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input-password>
          </a-form-model-item>

          <a-form-model-item>
            <a-button
              type="primary"
              html-type="submit"
              :disabled="form.email === '' || form.password === ''"
              block
            >
              Log in
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-card>
    </a-row>
  </section>
</template>

<script>
export default {
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      form: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            type: 'email',
            // required: true,
            trigger: 'blur',
            message: '',
          },
        ],
        password: [
          { min: 8, message: '', trigger: 'blur' },
        ]
      }
    };
  },
  methods: {
    handleSubmit(e) {
      console.group(this.form);
    },
  },
};
</script>

<style>
</style>
