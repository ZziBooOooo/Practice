
import {useParams} from 'react-router-dom';
import data from '../data/m_data.json';
import Item from './Item';

const Main = () => {
  let test = 10;

  let {page} = useParams();
  page = page || 'movies';
  
  return (
    <>
    <section>
        <p>{test}</p>
        <h2> {page} </h2>
        <div>
            {
              data[page].map((res,idx)=>{
                return <Item info={res} key={idx}/>;
              })
            }
        </div>
    </section>
    </>
  )
}
export default Main;