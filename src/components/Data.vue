<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="itemsData"
      :options.sync="options"
      :items-per-page="15"
      :loading="loading"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: "Data",
  data: () => {
    return {
      headers: [
        {
          text: "Currency",
          align: "start",
          sortable: true,
          value: "currency",
        },
        { text: "Amount", value: "amount" },
      ],
      loading: true,
      options: {},
    };
  },
  computed: {
    APIdata() {
      return this.$store.getters.getData;
    },
    itemsData() {
      let res = [];
      const i = this.APIdata.length - 1;
      const rates = this.APIdata[i].rates;
      for (let rate in rates) {
        res.push({ currency: rate, amount: rates[rate] });
      }
      console.log(res);
      return res;
    },
  },
  watch: {
    options: {
      handler() {
        this.getDataFromApi();
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi() {
      this.loading = true;
      this.$store.dispatch("getData");
    },
  },
};
</script>

<style lang="scss" scoped></style>
