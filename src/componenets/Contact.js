import React, {useState,useEffect} from 'react'
import "./Contact.css"
import emailjs from 'emailjs-com';

export default function Contact() {
    const [env,setEnv] = useState(false);
    const [error,setError] = useState("Please fill all fields");
    const [form,setForm] = useState({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
    })
    useEffect(() => {
        if(form.name && form.email && form.phoneNo && form.message){
            setError("");
        }
    }, [form])
    
    const onsubmit=()=>{
        if(form.name || form.email || form.phoneNo || form.message){
            setEnv(true)
            // emailjs.send('service_5nc23gg', 'template_69ntxpe', form, 'user_4jw9HAk4mlbuRIWIyH7sE')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            //     emailjs.send('service_5nc23gg', 'template_eoo6eor', form, 'user_4jw9HAk4mlbuRIWIyH7sE')
            //     .then((result) => {
            //         console.log(result.text);
            //     }, (error) => {
            //         console.log(error.text);
            //     });
            setError("");
        }
       
            
        console.log(form)
    }
    return (
        <div className="contact">
            {/* <div className="contact__error">{error}</div> */}
           <div className={`${env && "fold-env"} container`}>
               
           <h1>Contact Me</h1>
            <input className="form__name" placeholder="Name" onChange={(e)=>{setForm({...form, name : e.target.value})}} />
           <div className="form__details">
                <input placeholder="Email" onChange={(e)=>{setForm({...form, email : e.target.value})}}/>
                <input placeholder="Phone No" onChange={(e)=>{setForm({...form, phoneNo : e.target.value})}}/>
            </div>
            <textarea  className="form__body" placeholder="Body" onChange={(e)=>{setForm({...form, message : e.target.value})}} >
                
            </textarea>
           <button className={`form__button ${error && "error"}` } title={`${error && error}`} onClick={onsubmit} disable={`${error ? true : false}`}>Send Message</button>
           </div>
           <div className={`${env && "envelope"} front`}></div>
            {/* <div className="envelope back"></div> */}
            <p className={`${env && "result-message-view"} result-message`}>Thanks {form.name} for your Message</p>
        </div>
    )
}
