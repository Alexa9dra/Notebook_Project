import NotesListItem from '../notes-list-item/notes-list-item'

import './notes-list.css'

const NotesList = ({data, filter}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;

        return (
            <NotesListItem 
                key={id} 
                {...itemProps}/>
        );
    })

    const sortedElements = (elements => {
        let afterContent;
        let counter = 7;

        if(filter === 'week') counter = 2;

        if(elements.length > counter) 
            afterContent = sortedElements(elements.slice(counter));

        return (
            <>
                <div className="row notes-list__row">
                    {elements.slice(0,counter)}
                </div>
                {afterContent}
            </>
        )
    })

    return (
        <div className='container text-center'>
            {sortedElements(elements)}
        </div>

        // <div className='container text-center'>
        //     <div className="row notes-list__row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        //     <div className="row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        //     <div className="row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        //     <div className="row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        // </div>

        // <div className='container text-center'>
        //     <div class="row notes-list__row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        //     <div class="row notes-list__row">
        //         <NotesListItem/>
        //         <NotesListItem/>
        //         <NotesListItem/>
        //     </div>
        //     <div class="row notes-list__row">
        //         <NotesListItem/>
        //     </div>
        // </div>

        // <div className='container text-center'>
        //     <div class="row notes-list__row">
        //         <NotesListItem/>
        //     </div>
        // </div>
    );
}

export default NotesList;