import { router } from '@src/router/router'
import { RouterProvider } from 'react-router-dom'
import { LayoutProvider } from '@src/contexts/layoutContext'
import { ThemeProvider } from '@src/contexts/themeContext'
import { useRouter } from '@src/hooks'
import { Loader } from '@src/components/ui'
import { ErrorBoundary } from '@src/utils/shared/ErrorBoundary'
import '@src/assets/styles/index.css'

export const App = () => {
  const pagesRaw = import.meta.glob('./pages/**/!(*.test.[jt]sx)*.([jt]sx)', {
    eager: true,
  })
  const pages: Pages = Object.fromEntries(Object.entries(pagesRaw).map(([key, module]) => [key, module as PageModule]))
  const routes = useRouter(pages)
  const routerInstance = router(routes)

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LayoutProvider>
          <RouterProvider router={routerInstance} fallbackElement={<Loader />} />
        </LayoutProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}
