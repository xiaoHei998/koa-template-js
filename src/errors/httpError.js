class HttpError extends Error {
  constructor(code, message) {
    super(message);
    this.name = "DBError";
    this.code = code;
  }
}


module.exports = {


}
