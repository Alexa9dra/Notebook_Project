import './app-info.css'

const AppInfo = () => {
    return(
        <div className='app-info'>
            <h1>Notebook</h1>
            <h2>Total number of notes: 28</h2>
            <div className='app-info__date'>
                <h2>Month: February</h2>
                <h2>Week: 6-9</h2>
                <h2>Date: 1-28</h2>
            </div>
        </div>
    );
}

export default AppInfo;