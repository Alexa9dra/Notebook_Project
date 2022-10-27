import {Component} from 'react';

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import NotesList from '../notes-list/notes-list'

import './app.css'

class App extends Component {


    render() {
        return(
            <div className='app'>
                <AppInfo/>
    
                <div className='search-panel'>
                    <AppFilter/>
                    <SearchPanel/>
                </div>
    
                <NotesList/>
            </div>
        );
    }
}

export default App;