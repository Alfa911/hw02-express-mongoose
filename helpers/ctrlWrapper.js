const ctrlWrapper = (ctrl) => {
    const functionCall = async (req, res, next) => {
        try {
            await ctrl(req, res, next);
        } catch (e) {
            next(e);
        }
    }
    return functionCall;
}
export default ctrlWrapper;