import { useInView } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import blocksrvtApi from '../services/blockrvt-api'
import { Family } from '../utils/types'
import Card from './Card'

function Content() {
  const [loading, setLoading] = useState(false)

  const sentinelRef = useRef(null)
  const sentinelIsInView = useInView(sentinelRef)

  const [take, setTake] = useState(24)
  const skip = 0
  const [families, setFamilies] = useState<Family[]>([])

  const getFamilies = useCallback(async () => {
    setLoading(true)

    const response = await blocksrvtApi.get('/families', {
      params: {
        skip,
        take,
      },
    })

    setFamilies(response.data)
    setLoading(false)
  }, [take])

  useEffect(() => {
    getFamilies()
  }, [getFamilies, take])

  useEffect(() => {
    if (sentinelIsInView) {
      setTake(previousState => previousState + 24)
    }
  }, [sentinelIsInView])

  return (
    <div className="w-full px-[14px] lg:px-[199px] pt-[34px] pb-[48px] flex flex-col gap-[18px] min-h-screen">
      <h2 className="text-2xl font-semibold">Resultados</h2>

      <div className="flex flex-wrap justify-between gap-[10px]">
        {families?.map(family => (
          <Card family={family} />
        ))}
      </div>

      <div ref={sentinelRef} />

      {loading && (
        <div className="w-full flex items-start justify-center">
          <img
            src="/images/loading-icon.svg"
            className="animate-spin w-[32px] h-[32px]"
          />
        </div>
      )}
    </div>
  )
}

export default Content
