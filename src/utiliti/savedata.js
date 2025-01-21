const getStorRead = () => {
    const cakeReed = localStorage.getItem('read-list');
    if (cakeReed) {
        const storage = JSON.parse(cakeReed); 
        return storage;
    } else {
        return [];
    }
};

const addToStorRead = (id) => {
    const add = getStorRead(); 
    if (add.includes(id)) { 
        alert("This book is already added");
    } else {
        add.push(id); 
        const DataStorlist = JSON.stringify(add);
        localStorage.setItem('read-list', DataStorlist);
    }
};

// Witch list

const getStorwish = () => {
    const cakeReed = localStorage.getItem('read-wish');
    if (cakeReed) {
        const storage = JSON.parse(cakeReed); 
        return storage;
    } else {
        return [];
    }
};

const addToStorwish = (id) => {
    const add = getStorRead(); 
    if (add.includes(id)) { 
        alert("This book is already added");
    } else {
        add.push(id); 
        const DataStorlist = JSON.stringify(add);
        localStorage.setItem('read-wish', DataStorlist);
    }
};

export { addToStorRead ,addToStorwish,getStorRead ,getStorwish};
