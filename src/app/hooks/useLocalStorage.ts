import { useEffect, useRef, useState } from "react";

export default function useLocalStorageState<T>(
  key: string,
  defaultValue: T | undefined = undefined,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage =
      typeof window !== "undefined" && window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      console.log("debug session", valueInLocalStorage);
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        typeof window !== "undefined" && window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === "function" ? defaultValue() : defaultValue;
  });

  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      typeof window !== "undefined" && window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    typeof window !== "undefined" &&
      window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
