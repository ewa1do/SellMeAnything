import { useMemo } from 'react';
import { range } from '../utilities/range';

/**
 * @param {*} totalCount the total data available from the source
 * @param {*} pageSize maximum data visible in a single page
 * @param {*} siblingCount min number of page buttons to be shown on each side of the current page button
 * @param {*} currentPage current active page
 * @returns Range of numbers to be displayed as an array
 */

export const usePagination = (
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage
) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    // CASE 1: number of pages < pages numbers we want to show return the [1...totalPageCount]
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(
      currentPage - siblingCount,
      1
    );
    const rightSiblingindex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots =
      rightSiblingindex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // CASE 2: Only rights dots to be show
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // CASE 3: Only left dots to be shown
    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    // CASE 4: Both left and right dots to be shown
    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(
        leftSiblingIndex,
        rightSiblingindex
      );

      return [
        firstPageIndex,
        DOTS,
        ...middleRange,
        DOTS,
        lastPageIndex,
      ];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
