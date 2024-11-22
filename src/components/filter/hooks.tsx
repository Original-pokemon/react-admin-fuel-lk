import { useEffect, useRef } from 'react'

const useEffectSkipMount = (cb: () => void, deps: any[]) => {
  const mounted = useRef(true)

  useEffect(() => {
    if (!mounted.current) {
      return cb()
    }

    mounted.current = false
  }, [...deps])
}

export default useEffectSkipMount