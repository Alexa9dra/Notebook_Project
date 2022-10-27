import './app-filter.css'

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button className='filter-btn btn-active'>Month</button>
            <button className='filter-btn'>Week</button>
            <button className='filter-btn'>Day</button>
        </div>
    );
}

export default AppFilter;