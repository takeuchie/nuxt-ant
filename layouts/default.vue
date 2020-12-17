<template>
  <section :style="{ background: '#f2f2f2' }">
    <a-layout-header :style="{ background: 'white', padding:'0'}">
      <NuxtLink to="/">
        <img
          src="https://my.yearend.com/img/logo-circle.98993353.svg"
          class="logo"
        />
      </NuxtLink>
      <a-button @click="logout" :style="{  margin: '16px 24px 16px 0', float: 'right'}"> Log Out </a-button>
      <a-menu
        mode="horizontal"
        :style="{ lineHeight: '61px', height: '64px' }"
        v-model="current"
      >
        <a-menu-item key="home1">
          <NuxtLink to="/">Overview</NuxtLink>
        </a-menu-item>

        <a-menu-item key="tax2">
          <NuxtLink to="/tax">File tax</NuxtLink>
        </a-menu-item>
      </a-menu>

    </a-layout-header>
    <a-layout-content style="padding: 20px 50px;">
      <Nuxt />
    </a-layout-content>
  </section>
</template>

<script>

export default {
  data() {
    return { current: ["home1"] };
  },
  methods: {
    async logout() {
      const loggedout = await this.$store.dispatch('logout');
      if (loggedout) window.location.reload(true)
      // this.$router.push('/?loggedout')
    }
  }
};
</script>
<style>

html,body {
  height:100% !important;
  background: #f2f2f2 !important;
}

.logo {
  height: 35px;
  margin: 16px 25px 16px 25px;
  float: left;
}
</style>
