const success: PositionCallback = ({ coords }) =>  {
  const { latitude, longitude } = coords
  const position = [latitude, longitude]

  console.log('position :>> ', position);
}

const error: PositionErrorCallback = ({message}) => {
  console.log(message)
}

const useCurrentPosition = () => {
  const currentPosition = navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })

  return currentPosition
}

export default useCurrentPosition