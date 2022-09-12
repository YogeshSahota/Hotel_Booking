export const createError = (statuss, message) => {
    const err = new Error();
    err.status = statuss;
    err.message = message;
    return err;
  };