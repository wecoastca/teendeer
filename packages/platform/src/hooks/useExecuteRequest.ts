import { useCallback, useState } from "react"

export enum Status {
    IDLE = "idle",
    PENDING = "pending",
    SUCCESS = "success",
    ERROR = "error"
};


export const useExecuteRequest = <IData, IResponse>(endpoint: string): { value: IResponse | undefined, status: Status, error: any, execute: (options: IData) => Promise<void | IResponse> } => {
    const [status, setStatus] = useState<Status>(Status.IDLE);
    const [value, setValue] = useState<IResponse>();
    const [error, setError] = useState(null);

    const execute = useCallback(async (options: IData) => {
        return await fetch(`http://178.154.221.35:5000/${endpoint}`, {
            method: typeof options !== 'undefined' ? 'POST' : 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(options || ''),
            redirect: 'follow'
        })
            .then((res) => res?.json())
            .then((res: IResponse) => {
                setValue(res);
                setStatus(Status.SUCCESS);
                return res;
            }).catch((err) => {
                setError(err);
                setStatus(Status.ERROR);
            })
    }, [endpoint]);

    return { value, status, error, execute };
}