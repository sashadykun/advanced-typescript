import Moment from "react-moment";
import IPerson from "../../interfaces/IPerson";


const PeopleRenderer = (props: IPerson) => {
    const { firstName, lastName, birthday, eyeColor } = props;
    return (
        <div className='col12 p3' >
            <div className='card' >
                <div className='card-body'>
                    <h3> 🐑 {firstName} {lastName}</h3>
                    <ul>
                        <li>
                            Has <b>{eyeColor}</b> eyes
                        </li>
                        <li>
                            🎂&nbsp;&nbsp;&nbsp;Birthday: <b><Moment date={birthday} format='MMMM D, YYYY' /></b>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default PeopleRenderer;