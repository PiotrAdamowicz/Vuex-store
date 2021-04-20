<template>
  <div class="d-inline-flex pa-2">
    <!-- <h2>{{ mainCurrencyData }} exchange rate</h2> -->
    <v-row justify="center"> Date picker will be here </v-row>
    <v-data-table
      width="50%"
      :headers="headers"
      :items="itemsData"
      :options.sync="options"
      :items-per-page="50"
      :loading="loading"
      class="elevation-1 flex-grow-0 flex-shrink-1"
    ></v-data-table>
    <v-btn v-on:click="btnClick()" elevation="2" color="error" text large
      >Refresh</v-btn
    >
    <h2>{{ h2 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Data",
  data: () => {
    return {
      itemsData: [],
      date: new Date().toISOString().substr(0, 10),
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
      h2: "test",
    };
  },
  computed: {
    getData() {
      return this.$store.getters.getData;
    },
    localComputed() {
      console.log(this.$store.getters.testData);
      return this.$store.getters.testData;
    },
  },
  watch: {
    localComputed() {
      this.date = this.localComputed;
      console.log(this.date);
    },
    getData() {
      this.itemsData = this.getData;
      console.log(this.itemsData);
    },
    options: {
      handler() {
        this.setData();
      },
      deep: true,
    },
    btnData() {
      this.btnClick;
    },
  },
  mounted() {
    this.setData();
  },
  methods: {
    // ...mapActions({ getData: "store/getData" }),
    setData(date = "") {
      date = new Date().toISOString().substr(0, 10);
      this.loading = false;
      this.$store.dispatch("getData", date);
      // this.h2 = this.$store.getters.testingData;
    },
    btnClick(date = "") {
      console.log("button works");
      date = "2020-04-03";
      this.$store.dispatch("setDate", date);
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  height: 3rem;
  color: black;
}
</style>
