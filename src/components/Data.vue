<template>
  <div class="d-inline-flex pa-2">
    <h2>{{ mainCurrencyData }} exchange rate</h2>
    <v-row justify="center">
      <v-date-picker v-model="picker"></v-date-picker>
    </v-row>
    <v-data-table
      width="50%"
      :headers="headers"
      :items="itemsData"
      :options.sync="options"
      :items-per-page="50"
      :loading="loading"
      class="elevation-1 flex-grow-0 flex-shrink-1"
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
        res.push({ currency: rate, amount: rates[rate].toFixed(2) });
      }
      console.log(res);
      return res;
    },
    mainCurrencyData() {
      console.log(this.APIdata);
      return this.APIdata.base;
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
