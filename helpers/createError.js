let messages = {
    400: "Bad request",
    404: "Not found",
}

const throwError = (status, message = null) => {
    message = message ?? (messages[status] ?? "Unknown error");
    let error = new Error(message);
    error.status = status;
    return error;
}
export default throwError;