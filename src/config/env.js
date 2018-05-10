const ENV = {
  dev: {
    API_BASE_URI: "http://localhost:9000/api"
  },
  prod: {
    // TBD
  }
};

export default (process.env.NODE_ENV === "development" ? ENV.dev : prod);
