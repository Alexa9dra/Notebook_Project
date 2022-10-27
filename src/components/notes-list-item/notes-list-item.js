import './notes-list-item.css'

const NotesListItem = ({day, content}) => {
    return (
        <div className='col note'>
            <span className='notes-list-item__label'>Day {day}</span>
            <p contentEditable="true" className='notes-list-item__text'>{content}</p>
        </div>
    );
}

export default NotesListItem;