import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='p-36'>
      <div className="container">
        <h3 className='text-6xl'>404</h3>
        <p>Сторінку не знайдено!</p>
        <Link href={'/'} className='underline mt-5 block'>На головну</Link>
      </div>
    </section>
  )
}