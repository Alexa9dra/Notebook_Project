import {Component} from 'react';

import AppInfo from '../app-info/app-info'
import AppFilter from '../app-filter/app-filter'
import SearchPanel from '../search-panel/search-panel'
import NotesList from '../notes-list/notes-list'

import './app.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, day: 1, week: 6, month: 2, content:'Do homework =^='},
                {id: 2, day: 2, week: 6, month: 2, content:''},
                {id: 3, day: 3, week: 6, month: 2, content:''},
                {id: 4, day: 4, week: 6, month: 2, content:''},
                {id: 5, day: 5, week: 6, month: 2, content:'Go to cinema at 11 :)'},
                {id: 6, day: 6, week: 6, month: 2, content:''},
                {id: 7, day: 7, week: 6, month: 2, content:''},
                {id: 8, day: 8, week: 7, month: 2, content:''},
                {id: 9, day: 9, week: 7, month: 2, content:''},
                {id: 10, day: 10, week: 7, month: 2, content:''},
                {id: 11, day: 11, week: 7, month: 2, content:'Eat icecream'},
                {id: 12, day: 12, week: 7, month: 2, content:''},
                {id: 13, day: 13, week: 7, month: 2, content:''},
                {id: 14, day: 14, week: 7, month: 2, content:''},
            ], 
            filter: 'month',
            currentWeek: 7,
            currentDay: 13
        }
    }

    filterNotes = (items, filter) => {
        switch(filter){
            case 'week': 
                return items.filter(item => item.week === this.state.currentWeek);
            case 'day':
                return items.filter(item => item.day === this.state.currentDay);
            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, filter} = this.state;
        const visibleData = this.filterNotes(data, filter);

        return(
            <div className='app'>
                <AppInfo/>
    
                <div className='search-panel'>
                    <AppFilter 
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}/>
                    <SearchPanel/>
                </div>
    
                <NotesList 
                    filter={filter}
                    data={visibleData}/>
            </div>
        );
    }
}

export default App;