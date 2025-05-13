
import { useState } from 'react';

// Initial List of Shapes
const initialShapes = [
    {id: 0, type: 'Circle', x: 50, y: 100},
    {id: 1, type: 'Square', x: 150, y: 100},
    {id: 2, type: 'Circle', x: 250, y: 100},
];

export default function ShapesEditor(){
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick(){
        const nextShapes = shapes.map(shape => {
            
            if (shape.type === 'Square'){
                // No Change 
                return shape;
            }
            else{
                // Return a new circle 50px below
                return{
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });

        setShapes(nextShapes);
    }

    return (
        <>
        <button onClick={handleClick}>
            Move circles down!
        </button>
        {shapes.map(shape => (
            <div
            key={shape.id}
            style={{
            background: shape.type === 'Circle' ? '#7ebc8b' : '#fff8f0',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
                shape.type === 'Circle'
                ? '50%' : '',
            width: 20,
            height: 20,
            }} />
        ))}
    </>
    );
}