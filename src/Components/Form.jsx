import React,{useState} from 'react'
import './Form.css'


const Form =()=>{
    const [url,setUrl] = useState("");
    const [pages,setPages] = useState("");
    const [info,setInfo] = useState("");

    const sendData=(e)=>{
        e.preventDefault();
        console.log(url,pages,info);
    }
    return(
        <div className='Form' onSubmit={sendData}>
            <form className='info-form' >
                <span className='Title'>Enter the Details</span>
                <input type="text" className='input-field' value={url} onChange={(e)=>setUrl(e.target.value)} name="url" placeholder='Enter Url' />
                <input type="text" className='input-field' value={pages} onChange={(e)=>setPages(e.target.value)} name="pages" placeholder='Enter number of pages' />
                <input type="text" className='input-field' value={info} onChange={(e)=>setInfo(e.target.value)} name="info" placeholder='Enter info' />
                <button className='button btn-form'>Download</button>
            </form>
        </div>
    )
}

export default Form;