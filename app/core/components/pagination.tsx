import ReactPaginate from 'react-paginate';
import { AppStackColumn } from './stacks';

//
//

interface AppPaginationProps {
  page: number;
  total: number;
  perPage: number;
  showSubText?: boolean;
  onChange: (selected: number) => void;
}

export const AppPagination = ({
  page,
  total,
  perPage,
  showSubText = true,
  onChange,
}: AppPaginationProps) => {
  const pageCount = Math.ceil(total / perPage);
  const basicClass =
    'px-3 py-1.5 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-100 transition cursor-pointer';

  return (
    <AppStackColumn className="gap-1">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next ›"
        previousLabel="‹ Previous"
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        onPageChange={e => onChange(e.selected)}
        containerClassName="flex flex-wrap items-center justify-center gap-2 md:gap-1 p-2"
        pageClassName="flex"
        pageLinkClassName={basicClass}
        previousLinkClassName={basicClass}
        nextLinkClassName={basicClass}
        breakLinkClassName="px-3 py-1.5 text-gray-500"
        activeLinkClassName="!bg-black text-white border-black"
        disabledLinkClassName="opacity-50 cursor-not-allowed"
      />

      {showSubText && (
        <p className="text-neutral-500 text-sm text-center">
          Page {page + 1} of {pageCount} ({total} Pokemon shown)
        </p>
      )}
    </AppStackColumn>
  );
};
