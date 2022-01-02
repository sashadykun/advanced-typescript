import Moment from "react-moment";
import IWidget from "../../interfaces/IWidget";

export function WidgetRenderer(props: IWidget) {
    const { isSpecialCard, title, description, rating, created, updated, id } = props;
    return (
        <div className='col12 p3' >
            <div className={isSpecialCard ? 'card specialCard' : 'card'} >
                <div className='card-body'>
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-text'>{description}</p>
                    <p className='card-text font-italic'>Rating: {rating}/10</p>
                </div>
                <div className='card-footer text-muted text-right' style={{display: "flex", justifyContent: "right"}}>
                    <span className='float-left'>#{id}</span>&nbsp;
                    created:&nbsp;<Moment fromNow date={created} />&nbsp;
                    updated:&nbsp;<Moment fromNow date={updated} />
                </div>
            </div>
        </div>
    );
}