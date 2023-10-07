const getLocalStorageData = ()=>{
    const localStoredData = localStorage.getItem('favorites')
    if(localStoredData){
        return JSON.parse(localStoredData)
    }
    return []
}

const saveToLocalStorage = (data)=>{
    const localStoredData = getLocalStorageData()
    const isExist = localStoredData.includes(data);
    if(!isExist){
        localStoredData.push(data)
        localStorage.setItem('favorites',JSON.stringify(localStoredData))
    }
}

export {saveToLocalStorage,getLocalStorageData}