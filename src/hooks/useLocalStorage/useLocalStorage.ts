import { useState } from "react";

type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

const useLocalStorage = <T>(key: string, defaultValue: T): [T, SetValue<T>] => {
    const [localStorageValue, setLocalStorageValue] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            if (storedValue !== null) {
                return JSON.parse(storedValue) as T;
            } else {
                localStorage.setItem(key, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch {
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        }
    });

    const setValue: SetValue<T> = (valueOrFn) => {
        const newValue =
            typeof valueOrFn === "function"
                ? (valueOrFn as (prevValue: T) => T)(localStorageValue)
                : valueOrFn;

        localStorage.setItem(key, JSON.stringify(newValue));
        setLocalStorageValue(newValue);
    };

    return [localStorageValue, setValue];
};

export default useLocalStorage;
