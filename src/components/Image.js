const Image = (props) => {
  const { src, style } = props

  return <img src={src} style={style} alt="icon" />
}

export default Image
