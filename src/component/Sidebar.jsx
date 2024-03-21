// Redux
import { useSelector , useDispatch } from "react-redux";
import { deleteItemfromSidebar } from '../service/actions';

// Delete Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {

    const nameList = useSelector((state) => state.addToSidebar );
    const dispatch = useDispatch();

    return (
      <div className='Sidebar'>
        {
          nameList.map((name,index)=>
            <div key={index}>
              <span>{name}</span>
              <span className='delete'
                onClick={()=> dispatch(deleteItemfromSidebar(index))}
              ><FontAwesomeIcon icon={faTrash} /></span>
            </div>
          )
        }
      </div>
    )
}
  
export default Sidebar;