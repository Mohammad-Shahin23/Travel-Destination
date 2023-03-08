
function Target(props){
    console.log(props.arryData[0])
    return(
        <>
            <h2>Cities</h2>
            {props.arryData.map((item)=>{
                return (
                    <div key={item.ID}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                        <hr/>
                    </div>
                )
            })}
        </>
    )
}

export default Target;
