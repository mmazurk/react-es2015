function choice(items) {
    const randIndex = Math.floor(Math.random() * items.length); 
    return (
        items[randIndex]
    )
}

function remove(items, item) {
    if (items.indexOf(item) === -1) {
        return undefined;
    } else {
        items.splice(items.indexOf(item), 1)
    }
    return(items);
}

export {choice, remove}