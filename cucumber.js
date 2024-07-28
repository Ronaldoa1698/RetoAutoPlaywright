module.exports = {
    default: {
      require: ["./steps/*.js"],
      format: ["pretty"],
      paths: ["./features/*.feature"],
      publishQuiet: true,
    },
  };
  