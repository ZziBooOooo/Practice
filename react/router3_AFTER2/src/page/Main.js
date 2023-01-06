import {useRef,useState} from 'react';
import {useParams} from 'react-router-dom';
import data from '../data/m_data.json';
import Item from './Item';

const Main = () => {
  // let {page} = useParams();

  let num = 10;
  let [count, setCount] = useState(10);
  let numRef = useRef(10);
  
  function incre(){
    num++;
    numRef.current++;
    // setCount(++count);

    console.log(num,count, numRef)
  }

  
  return (
    <>
      <section onClick = {incre}>
        num = {num} / count = {count} / ref = {numRef.current}
      </section>

      
    
    </>

    // <>
    // <section>
    //     <h2 > {page} </h2>
    //     <div>
    //         {
    //           data[page].map((res,idx)=>{
    //             return <Item info={res} key={idx}/>;
    //           })
    //         }
    //     </div>
    // </section>
    // </>
  )
}
export default Main;