import TagButton from "./TagButton";


export default function SideMenue(){
    return(
        <div style={{border: "solid teal 5px"}} >
            <TagButton  title="Last Article">
                <span>..</span>
            </TagButton>
            <TagButton title="most Article"/>
            <TagButton title="Recent Article"/>
            <TagButton title="trend "/>
        </div>
    );
}