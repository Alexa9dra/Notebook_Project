import './notes-list-item.css'

const NotesListItem = () => {
    return (
        <div className='col note'>
            <span className='notes-list-item__label'>Day</span>
            <p contenteditable="true" className='notes-list-item__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsa, accusamus nostrum totam voluptas neque ut nisi asperiores cum maxime assumenda quisquam. Veniam, dolor distinctio vitae cumque deserunt suscipit minima!</p>
        </div>
    );
}

export default NotesListItem;