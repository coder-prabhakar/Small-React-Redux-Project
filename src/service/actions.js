export const addItemToSidebar = (content) => {
    return {
        type: 'ADD_ITEM',
        payload: content
    }
}

export const deleteItemfromSidebar = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}