
import { useState } from 'react';

let nextId = 3;

const initialArtists = [
    {id: 0, name: 'John Doe'},
    {id: 1, name: 'Jane Smith'},
    {id: 2, name: 'Alice Johnson'},
];

export default function List(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);


    function handleClick(){
        const insertAt = 1; // Insert at index 1
        const nextArtists = [
            ...artists.slice(0, insertAt),
            {id:nextId++, name: name}, //new item
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName(''); // Clear the input field
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Add artist
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}
                    </li>
                ))}
            </ul>
        </>
    );
}