import { useCallback } from "react";
import { debounce } from "../app/utils/debounce";

const useInfiniteScroll = (loadMore: () => void) => {
  const debouncedLoadMore = useCallback(debounce(loadMore, 300), [loadMore]);

  const onEndReached = useCallback(() => {
    debouncedLoadMore();
  }, [debouncedLoadMore]);

  return { onEndReached };
};

export default useInfiniteScroll;
