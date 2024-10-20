import { BaseLayout } from '@src/layouts/BaseLayout'
import { ScrollToTop } from '@src/components/scrollToTop'

export default function layout() {
  return (
    <>
      <ScrollToTop />
      <BaseLayout />
    </>
  )
}
