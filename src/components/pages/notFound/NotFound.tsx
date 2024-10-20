import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <section className='flex h-svh w-screen items-center justify-center bg-background text-foreground sm:h-lvh'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-primary/50 lg:text-9xl'>404</h1>
          <p className='mb-4 text-3xl font-bold tracking-tight'>Something's missing.</p>
          <p className='text-foreground-100 mb-4 text-lg font-light'>
            Sorry, we can't find that page. You'll find lots to explore on the home page.
          </p>

          <Link
            to='/'
            className='my-4 inline-flex rounded-lg bg-primary/80 px-5 py-2.5 text-center text-sm font-medium text-white transition-colors duration-200 ease-out hover:bg-primary'
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
