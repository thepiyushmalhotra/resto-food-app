import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer uhrfaXPSqVAFmmfZM4dR2vDw4jt1jLVgDYY8cXhgQHrlF7zPx4oZtc1I9qSwUQ1Larvf6T86nWFPIt2PT1OLRokI_doClNpZSqct7NDi3ujGaPlW2OPJgnlJH7cXYnYx",
  },
});
