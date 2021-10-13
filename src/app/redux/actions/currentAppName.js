export const setCurrentAppName = (name) => {
    return {
        type: 'CURRENT_APP_NAME',
        payload: name,
    }
}