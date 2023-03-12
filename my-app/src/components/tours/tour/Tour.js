
import React from 'react'
import { Link } from 'react-router-dom'


import './Tour.css'

function Tour(props) {
    return (
        <Link to={`/city/${props.tour.id}`}>
            <img src={props.tour.image} alt={props.tour.name} className='img' />{props.tour.name}


        </Link >
    )
}
export default Tour;





// function Tour(props){
//     console.log(props.arryData[0])
//     return(
//         <>
//             <h2>Cities</h2>
//             {props.arryData.map((item)=>{
//                 return (
//                     <div key={item.ID}>
//                         <h3>{item.name}</h3>
//                         <img src={item.image} alt={item.name}></img>
//                         <hr/>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// export default Tour;





































// import { Link } from 'react-router-dom'
// function Tour(props) {
//     return (
//         <Link to={`/city/${props.tour.id}`}>
//             <img src={props.tour.image} alt={props.tour.name} className='img' />
//             <p>{props.tour.name}</p>


//         </Link >
//     )
// }
// export default Tour;







// const data = require ("../../../data/ db.json");

// function Target(){
//     console.log(data[0])
//     return(
//         <>
//             <h2>Cities</h2>
//             {data.map((item)=>{
//                 return (
//                     <div key={item.ID}>
//                         <h3>{item.name}</h3>
//                         <img src={item.image} alt={item.name}></img>
//                         <hr/>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// export default Target;
