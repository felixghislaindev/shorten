import { useState, useEffect, useCallback } from "react";
import { server } from "./server";

interface State<TData> {
  data: TData | null;
}

export const useQuery = <TData = any>(query: string) => {
  const [state, setState] = useState<State<TData>>({
    data: null,
  });

  const fetch = useCallback(() => {
    const fetchData = async () => {
      const { data } = await server.fetch<TData>({
        query,
      });
      setState({ data });
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...state, refetch: fetch };
};
