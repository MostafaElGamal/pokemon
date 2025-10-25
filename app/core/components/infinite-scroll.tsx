import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

//
//

interface AppInfiniteScrollProps {
  loading: boolean;
  children: React.ReactNode;
  fetchNextPage: () => void;
  skeleton?: React.ReactNode;
}

export const AppInfiniteScroll = ({
  children,
  loading,
  skeleton,
  fetchNextPage,
}: AppInfiniteScrollProps) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  return (
    <>
      {children}
      <div ref={ref} className="h-20 w-full mt-8">
        {loading && skeleton}
      </div>
    </>
  );
};
