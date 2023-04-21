import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { use } from "react";

const useCurrentUser = () => {
    const { data, isLoading, error, mutate } = useSWR('/api/current', fetcher);

    return{
        data,
        isLoading,
        error,
        mutate
    }
};

export default useCurrentUser;