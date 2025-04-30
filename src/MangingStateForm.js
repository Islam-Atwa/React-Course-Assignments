import { useState } from 'react';

function SignupForm(){
    const [formData, setFormData] = useState({
        name: '',
        email:''
    });

    const handelChange = (e) =>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleChange = (e) =>{
        const{name, value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log('fROM SUBMITTED', FormData);
    };

    return(
        <form onSubmit={handlesubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handelChange}/>
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SignupForm;