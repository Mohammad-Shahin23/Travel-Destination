import Tour from './tour/Tour'

const data = require('../../data/ db.json')

function Tours() {
    return (
        <>


                {data.map((item) => {
                    return (
                        <Tour key={item.id} tour={item} />
                    )
                })}

        </>
    )
}
export default Tours;







// import Tour from "../tours/tour/Tour"
// const data = require ("../../data/ db.json");
// function Tours(){
    
//     return(
//         <>
//             <Tour arryData={data} />
//         </>
//     )
// }

// export default Tours;





// import Target from "./tour/Tour";

// function Tours(){
    
//     return(
//         <>
//          <Target/>
         
            
//         </>
//     )
// }

// export default Tours;
