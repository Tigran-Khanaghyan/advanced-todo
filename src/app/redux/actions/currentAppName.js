export const setCurrentAppName = (name) => {
    return {
        type: 'CURRENT_APP',
        payload: name,
    }
}