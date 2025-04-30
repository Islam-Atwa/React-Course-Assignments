

export default function MyButton(){
    let name = "Mohamed";
    return (
        <div>
            <button onClick={buttonclick} >Click Me</button>
            <h1>{name}</h1>
        </div>
    )
}

function buttonclick(){
    alert("Hello World!");
}