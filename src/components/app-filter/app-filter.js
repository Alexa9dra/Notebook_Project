import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'month', label: 'Month'},
        {name: 'week', label: 'Week'},
        {name: 'day', label: 'Day'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-active' : '';

        return (
            <button 
                className={`filter-btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {buttons}
        </div>
    );
}

export default AppFilter;