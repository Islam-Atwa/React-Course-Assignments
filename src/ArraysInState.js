import{ useState } from 'react';

let nextId = 0;

export default function List(){
    const [name, setName] = useState('');
    const [employe, setEmploye] = useState([]);
    
    return (
        <>
            <h1>Employe List:</h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={()=>{
                employe.push({
                    id: nextId++,
                    name: name,
                });
            }}>Add</button>
            <ul>
                {employe.map((employe) => (
                    <li key={employe.id}>{employe.name}</li>
                ))}
            </ul>
        </>
    );
}

