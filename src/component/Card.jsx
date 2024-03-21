// Redux
import { useDispatch } from "react-redux";
import { addItemToSidebar } from '../service/actions';

function Card(props) {
    const dispatch = useDispatch();
    return (
        <div>
            <p>{props.name}</p>
            <button onClick={()=>dispatch(addItemToSidebar(props.name))}>Add To Sidebar</button>
        </div>
    )
}

export default Card;