
// Removing Form an Array
import { useState } from 'react';

// Initial list of employees
const initialEmployees = [
    {id: 0, name: 'Islam Atwa'},
    {id: 1, name: 'Mohamed Moshrif'},
    {id: 2, name: 'Osama Elzero'},
];

// List Component to manage and display a list of employees
export default function List(){
    const [employees, setEmployees] = useState(initialEmployees);

    return(
        <>
            <h1>Inspiring employees</h1>

            {/* Render a List of Employees with a 'Removing' button to remove each employe */}
            <ul> 
                {employees.map(employe =>(
                    <li key={employe.id}>
                        {employe.name}{' '}

                        <button onClick={() => {
                            setEmployees(employees.filter(a => a.id !== employe.id));
                        }}>
                        Removeing</button>
                    </li>
                ))}
            </ul>
        
        </>
    );
}