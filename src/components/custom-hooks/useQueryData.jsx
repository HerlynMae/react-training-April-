import { useQuery } from "@tanstack/react-query";
import { queryData } from "../helpers/queryData";

// Queries hook
//ginagamit para makuha ang data
//ito ang nag pa process ng request at mag re return ng value
const useQueryData = (
  endpoint,
  method,
  key = "",
  fd = {},
  id = null,
  refetchOnWindowFocus = false
) => {
  return useQuery({
    queryKey: [key, id],
    queryFn: async () => await queryData(endpoint, method, fd),
    retry: false,
    refetchOnWindowFocus: refetchOnWindowFocus,
    cacheTime: 200,
  });
};

export default useQueryData;
