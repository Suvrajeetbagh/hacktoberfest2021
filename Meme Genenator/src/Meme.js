
const Meme =({meme,setPage})=>{

    return(
        <div>
        {meme.map((i)=>(
            <div key={i.id} className="cointainer" onClick={()=>{setPage(i)}}>
             
               <div className="mene" style={{ backgroundImage:`url(${i.url})`}}></div>
            </div>
     
           ))
           }
           </div>
    );

}

export default Meme;