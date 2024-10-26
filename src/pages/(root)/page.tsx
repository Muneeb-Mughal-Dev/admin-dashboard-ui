// import { DropDown } from '@src/components/ui/dropdownMenu/Dropdown'
import { FileUpload } from '@src/components/ui/form'

export default function HomePage() {
  return (
    <>
      Home Page
      {/* <DropDown /> */}
      <FileUpload />
      {/* <div className='flex gap-2'>
                {[...new Array(4)].map((i) => (
                    <div key={'first-array' + i} className='h-20 w-full animate-pulse rounded-lg bg-default'></div>
                ))}
            </div>
            <div className='flex flex-1 gap-2'>
                {[...new Array(2)].map((i) => (
                    <div key={'second-array' + i} className='h-full w-full animate-pulse rounded-lg bg-default'></div>
                ))}
            </div> */}
    </>
  )
}
