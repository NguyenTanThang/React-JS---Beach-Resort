import data from "../data";

export const typeSorter = (roomItems, type) => {
    if (type === ""){
        return roomItems;
    }

    if (type === "all"){
        return data;
    }

    return roomItems.filter(item => {
        return item.fields.type === type
    })
}

export const capacitySorter = (roomItems, capacity) => {
    if (capacity === ""){
        return roomItems;
    }

    if (capacity === "all"){
        return roomItems;
    }

    return roomItems.filter(item => {
        return item.fields.capacity == capacity
    })
}

export const priceSorter = (roomItems, price) => {
    if (price === ""){
        return roomItems;
    }

    return roomItems.filter(item => {
        return item.fields.price <= price
    })
}

export const sizeSorter = (roomItems, lowerSize, upperSize) => {
    if (lowerSize === "" && upperSize === ""){
        return roomItems;
    } 

    if (upperSize === "") {
        upperSize = 100000;
    }

    if (lowerSize === ""){
        lowerSize = 0
    }

    return roomItems.filter(item => {
        return item.fields.size <= upperSize && item.fields.size >= lowerSize;
    })
}

export const petSorter = (roomItems, allowPets) => {
    if (allowPets === ""){
        return roomItems;
    }

    return roomItems.filter(item => {
        return item.fields.pets == allowPets
    })
}

export const breakfastSorter = (roomItems, allowBreakfast) => {
    if (allowBreakfast === ""){
        return roomItems;
    }

    return roomItems.filter(item => {
        return item.fields.breakfast == allowBreakfast
    })
}