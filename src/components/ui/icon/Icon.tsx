import { Suspense, lazy, memo } from 'react'
import loading from '@src/assets/icons/spinning-circles.svg'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { Image } from '@src/components/ui/image'

export interface IconProps extends Omit<LucideProps, 'ref'> {
  name: keyof typeof dynamicIconImports
}

const IconComponent = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name])

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: props.size ?? 24,
            height: props.size ?? 24,
          }}
        >
          <Image alt='loader' src={loading} className='w-full' />
        </div>
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  )
}

export const Icon = memo(IconComponent)
