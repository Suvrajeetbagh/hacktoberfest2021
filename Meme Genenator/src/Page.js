import {useState} from 'react';


const Page =({page,setPage}) => {
    // console.log(page)

  
const [form,setForm] =useState({
    template_id:page.id,
    username:"P0p3yeop",
    password:"*************",
    boxes:[]

})
const  genrenateMeme=()=>{
    let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
    form.boxes.map((box,index)=>{
        url+=`&boxes[${index}][text]=${box.text}`;
      });
fetch(url)
.then((res)=>res.json())
.then((data)=>{
    setPage({...page,url:data.data.url})
})
    console.log(url)
}
    return(
<div className="page"> 
<img src={page.url} alt="img" className="pageimg"/>


<div>
    {[...Array(page.box_count)].map((_,index)=>(
        <input key={index} type="text" placeholder={`Meme Caption ${index+1}`}  onChange={(e)=>{
            const newBoxes = form.boxes;
            newBoxes[index]={text:e.target.value}   
            setForm({...form, boxes: newBoxes})   
        }}/>
    ))}
</div>
<div>
    <button onClick={genrenateMeme}>Create Meme</button>
    <button onClick={()=>{setPage(null)}}>Choose Template</button>
</div>
</div>
    );
}

export default Page;