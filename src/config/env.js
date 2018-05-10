const ENV = {
  dev: {
    API_BASE_URI: "http://localhost:8081/api"
  },
  prod: {
    // TBD
  }
};

export default (process.env.NODE_ENV === "development" ? ENV.dev : prod);
