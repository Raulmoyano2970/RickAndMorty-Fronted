"use client";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Link from "next/link";

interface Props {
  pages: number;
  page: number;
}

const FastPaginationItem = (item: any) => {
  return (
    <PaginationItem
      component={Link}
      href={`${item.page === 1 ? "/./" : `/./humans/${item.page}`}`}
      {...item}
    />
  );
};

const FastPagination = ({ page, pages }: Props) => {
  return (
    <Pagination
      count={pages}
      page={page}
      renderItem={FastPaginationItem}
      shape="rounded"
      variant="outlined"
    />
  );
};

export default FastPagination;