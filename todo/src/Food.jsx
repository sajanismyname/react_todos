

function Food (){
    
    const food1 = "kemanoodle";
    const food2 = "momo";

    return (
        <ul>
            <li>apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food