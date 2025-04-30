import{ useState } from 'react';
// export default 
function NameForm(){
    const [name, setName] = useState('');
    const handelChange =(event)=>{
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handelChange}/>
            <p> hi {name} </p>
        </div>
    )
}
export default NameForm;