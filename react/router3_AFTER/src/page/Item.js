const Item = ({info}) => {
  return (
    <figure >
        <img src={info.url}  />
        <figcaption> {info.name} </figcaption>
    </figure>
  )
}

export default Item