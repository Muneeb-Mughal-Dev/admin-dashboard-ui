export const GridPattern = () => {
  const columns = 41
  const rows = 11
  return (
    <div className='absolute inset-0 flex flex-shrink-0 scale-105 flex-wrap items-center justify-center gap-x-px gap-y-px bg-background'>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => {
          const index = row * columns + col
          return (
            <div
              key={`${col}-${row}`}
              className={`flex h-10 w-10 flex-shrink-0 rounded-[2px] ${
                index % 2 === 0 ? 'bg-default-50/30' : 'shadow-x-large bg-default-50/30'
              }`}
            />
          )
        }),
      )}
    </div>
  )
}
