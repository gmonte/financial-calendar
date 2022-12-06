export interface LoaderProps {
  size?: 'sm' | 'md'
}

export function Loader () {
  return (
    <div
      style={ {
        top: 0,
        left: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      } }
    >
      <span>Loading...</span>
    </div>
  )
}
