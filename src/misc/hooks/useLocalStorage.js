import React, {useEffect, useState} from 'react';
const initPage = 0;
const useLocalStorage = (key, initValue) => {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initValue);
    })
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setValue(value)
    }, [value]);
    return [value, setValue];
}

const getSavedValue = (key, initValue) => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if (initValue instanceof Function) return initValue()
    return initValue;
}

export default useLocalStorage;