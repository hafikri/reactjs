import './ListFormComp.css';

export const ListForm = (props) => {
    return(
              <tr>
                <td>{`${props.username}`}</td>
                <td>{`${props.email}`}</td>
                <td>{`${props.password}`}</td>
                <td>{`${props.experience}`}</td>
                <td>{`${props.lvl}`}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
    )
}