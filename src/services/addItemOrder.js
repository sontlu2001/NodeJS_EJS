import db from "../models/index";

let addItemOrder = (itemIdInput, listOrder) => {

    let indexItem = -1;
    let dayOfWeek = 0

    if (listOrder.length > 0)
        indexItem = listOrder.findIndex(({ itemId }) => itemId === itemIdInput.itemId)
    if (indexItem !== -1) {
        listOrder[indexItem].quatity = listOrder[indexItem].quatity + 1;
    }
    else {
        listOrder.push({
            itemId: itemIdInput.itemId, name: itemIdInput.name, price: itemIdInput.price, type: itemIdInput.type, quatity: 1
        })
    }
    let result = 0;
    for (let index = 0; index < listOrder.length; index++) {
        if (dayOfWeek == 0 && listOrder[index].type === 'drink')
            result += listOrder[index].price * listOrder[index].quatity * 0.95;
        else if (dayOfWeek == 0 && listOrder[index].type === 'vegetable')
            result += listOrder[index].price * listOrder[index].quatity * 0.9;
        else
            result += listOrder[index].price * listOrder[index].quatity
    }
    return result
}

module.exports = addItemOrder