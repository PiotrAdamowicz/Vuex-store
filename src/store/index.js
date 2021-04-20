import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
const baseURL = "http://api.exchangeratesapi.io/v1/";
const access_key = "31417285af16596aeed9e5a3d3e2e460";
// const url = "latest";

const fakeData = {
  success: true,
  timestamp: 1618871344,
  base: "EUR",
  date: "2021-04-19",
  rates: {
    AED: 4.421673,
    AFN: 93.352037,
    ALL: 123.235763,
    AMD: 628.619407,
    ANG: 2.160285,
    AOA: 784.248686,
    ARS: 111.84946,
    AUD: 1.550648,
    AWG: 2.167384,
    AZN: 2.046914,
    BAM: 1.954747,
    BBD: 2.430023,
    BDT: 102.050589,
    BGN: 1.955997,
    BHD: 0.453814,
    BIF: 2371.422553,
    BMD: 1.203768,
    BND: 1.601432,
    BOB: 8.310194,
    BRL: 6.676219,
    BSD: 1.203508,
    BTC: 2.1469348e-5,
    BTN: 90.116774,
    BWP: 12.989631,
    BYN: 3.118372,
    BYR: 23593.848747,
    BZD: 2.425905,
    CAD: 1.508141,
    CDF: 2372.626628,
    CHF: 1.10181,
    CLF: 0.030564,
    CLP: 843.363905,
    CNY: 7.836886,
    COP: 4366.065786,
    CRC: 739.184944,
    CUC: 1.203768,
    CUP: 31.899847,
    CVE: 110.927408,
    CZK: 25.935664,
    DJF: 213.933968,
    DKK: 7.436636,
    DOP: 68.55447,
    DZD: 159.189932,
    EGP: 18.88971,
    ERN: 18.058817,
    ETB: 49.77607,
    EUR: 1,
    FJD: 2.447223,
    FKP: 0.874387,
    GBP: 0.860724,
    GEL: 4.146979,
    GGP: 0.874387,
    GHS: 6.94583,
    GIP: 0.874387,
    GMD: 61.513284,
    GNF: 11947.395132,
    GTQ: 9.287859,
    GYD: 251.788351,
    HKD: 9.348641,
    HNL: 29.023276,
    HRK: 7.573268,
    HTG: 99.588733,
    HUF: 360.974255,
    IDR: 17475.277619,
    ILS: 3.925656,
    IMP: 0.874387,
    INR: 90.133378,
    IQD: 1760.510398,
    IRR: 50684.643305,
    ISK: 151.698392,
    JEP: 0.874387,
    JMD: 181.811962,
    JOD: 0.853453,
    JPY: 130.201935,
    KES: 129.94634,
    KGS: 102.071443,
    KHR: 4875.259646,
    KMF: 492.792469,
    KPW: 1083.391245,
    KRW: 1343.200175,
    KWD: 0.362611,
    KYD: 1.002932,
    KZT: 518.408358,
    LAK: 11339.491986,
    LBP: 1838.153782,
    LKR: 229.868182,
    LRD: 207.77928,
    LSL: 17.141463,
    LTL: 3.554414,
    LVL: 0.728147,
    LYD: 5.410955,
    MAD: 11.50821,
    MDL: 21.61502,
    MGA: 4526.166636,
    MKD: 61.615911,
    MMK: 1696.967575,
    MNT: 3431.523529,
    MOP: 9.628883,
    MRO: 429.744895,
    MUR: 48.569507,
    MVR: 18.610531,
    MWK: 950.976798,
    MXN: 23.876361,
    MYR: 4.963733,
    MZN: 66.881237,
    NAD: 17.141681,
    NGN: 457.432024,
    NIO: 42.250091,
    NOK: 9.983576,
    NPR: 144.183886,
    NZD: 1.675579,
    OMR: 0.463438,
    PAB: 1.203508,
    PEN: 4.421474,
    PGK: 4.248867,
    PHP: 58.261733,
    PKR: 183.996076,
    PLN: 4.550905,
    PYG: 7684.772516,
    QAR: 4.382931,
    RON: 4.925941,
    RSD: 117.334965,
    RUB: 92.007946,
    RWF: 1179.692437,
    SAR: 4.514634,
    SBD: 9.618724,
    SCR: 18.552507,
    SDG: 459.839585,
    SEK: 10.112252,
    SGD: 1.601228,
    SHP: 0.874387,
    SLL: 12290.469452,
    SOS: 703.00082,
    SRD: 17.03811,
    STD: 24953.068742,
    SVC: 10.530944,
    SYP: 1513.819145,
    SZL: 17.141143,
    THB: 37.564179,
    TJS: 13.722394,
    TMT: 4.213187,
    TND: 3.306143,
    TOP: 2.731833,
    TRY: 9.749915,
    TTD: 8.177166,
    TWD: 33.934819,
    TZS: 2790.87535,
    UAH: 33.698022,
    UGX: 4357.739852,
    USD: 1.203768,
    UYU: 53.0808,
    UZS: 12657.618077,
    VEF: 257401934861.80487,
    VND: 27775.73806,
    VUV: 131.859355,
    WST: 3.047611,
    XAF: 655.601792,
    XAG: 0.046631,
    XAU: 0.00068,
    XCD: 3.253242,
    XDR: 0.841644,
    XOF: 659.063965,
    XPF: 119.624421,
    YER: 301.42655,
    ZAR: 17.11183,
    ZMK: 10835.35276,
    ZMW: 26.714338,
    ZWL: 387.613464,
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [""],
    testingData: "",
  },
  mutations: {
    SET_DATA(state, paylode) {
      let res = [];
      console.log(`paylode: `);
      console.log(paylode);

      state.data = res;
    },
    TESTING_DATA(state, paylode) {
      state.testingData = paylode;
    },
  },
  actions: {
    getData({ commit }, paylode) {
      console.log(`date: ${paylode.success ? paylode : "empty"}`);
      console.log("fake:");
      console.log(fakeData);

      // if (paylode.success) {
      //   console.log(`Date format: ${paylode}`);
      //   const url = `${baseURL}${paylode}?access_key=${access_key}`;
      //   commit("TESTING_DATA", fakeData);
      // } else {
      //   commit("SET_DATA", fakeData);
      // }

      commit("SET_DATA", fakeData);

      //   axios
      //     .get(
      //       `http://api.exchangeratesapi.io/v1/${url}?access_key=${access_key}`
      //     )
      //     .then((res) => {
      //       commit("SET_DATA", res.data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
    },
  },
  getters: {
    getData: (state) => state.data,
    testData: (state) => state.testingData,
  },
});
