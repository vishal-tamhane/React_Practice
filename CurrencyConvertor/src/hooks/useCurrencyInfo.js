import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
  const [data, setData] = useState({})

  useEffect(() => {
    // Add https:// to the URL and fix the endpoint path
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency.toLowerCase()}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok')
        }
        return res.json()
      })
      .then((res) => {
        setData(res[currency.toLowerCase()] || {})
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error)
        setData({}) // Set empty object on error
      })
  }, [currency])

  return data
}

export default useCurrencyInfo
