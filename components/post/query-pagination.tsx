'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination'

interface QueryPaginationProps {
  total: number
  className: string
}

export function QueryPagination({ total, className }: QueryPaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page')) || 1

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(page.toString())
    params.set('page', page.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        {page - 1 >= 1 ? (
          <PaginationItem>
            <PaginationPrevious
              href={createPageUrl(page - 1)}
            ></PaginationPrevious>
          </PaginationItem>
        ) : null}

        {Array(total)
          .fill('')
          .map((_, index) => (
            <PaginationItem
              className='hidden sm:inline-block'
              key={`page-button-${index}`}
            >
              <PaginationLink
                isActive={page === index + 1}
                href={createPageUrl(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

        {page + 1 <= total ? (
          <PaginationItem>
            <PaginationNext href={createPageUrl(page + 1)}></PaginationNext>
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}
