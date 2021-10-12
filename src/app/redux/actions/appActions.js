export const addApp = (app) => {
    return {
        type: "NEW_APP",
        payload: app
    }
}