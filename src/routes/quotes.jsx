import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import QuoteCard from '../components/QuoteCard.jsx'

export const Route = createFileRoute('/quotes')({
  component: RouteComponent,
})

function RouteComponent() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.freeapi.app/api/v1/public/quotes')
        const data = await response.json()
        const quotesData = data.data.data
        console.log('Correct data:', quotesData)  
        setQuotes(quotesData)
        console.log('Fetched quotes:', quotes)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching quotes:', error)
        setLoading(false)
      }
    }

    fetchQuotes()
  }, [])

  return (
    <div>
      {loading && <div className='loading'>Loading...</div>}
      <h1>Quotes</h1>
      <div className='quotes'>
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    </div>
  )
}
