import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { marqueeAnimation } from '@src/utils/styles'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    marqueeAnimation()
  }, [pathname])

  return <></>
}
