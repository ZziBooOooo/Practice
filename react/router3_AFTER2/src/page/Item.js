const Item = ({info}) => {
  let num = 100;
  return (
    <figure aa={num}>
        <img src={info.url}  />
        <figcaption> {info.name} </figcaption>
    </figure>
  )
}

export default Item

