import './app-filter.css'

const AppFilter = () => {
    return (
        <div className='btn-group'>
            <button className='active'>Month</button>
            <button>Week</button>
            <button>Day</button>
        </div>
    );
}

export default AppFilter;