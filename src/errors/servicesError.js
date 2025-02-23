class ServicesError extends Error {
    constructor(code, message) {
      super(message);
      this.name = "ServicesError";
      this.code = code;
    }
  }