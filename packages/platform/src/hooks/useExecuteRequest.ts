import { useCallback, useState } from "react"

export const useExecuteRequest = (endpoint: string)=> {
    const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);

    const token = localStorage.getItem("token")

    const execute = useCallback(async (options = "") => {
        return await fetch(`https://domen.com/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${token}`,
              },
            body: JSON.stringify(options),
            redirect: 'follow'
        })
        .then((res) => res?.json())
        .then((res) => {
            setValue(res);
            setStatus('success');
            return res;
        }).catch((err) => {
            setError(err);
            setStatus('error');
        })
    },[token, endpoint]);

    return {value, status, error, execute};
}