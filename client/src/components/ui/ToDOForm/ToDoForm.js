import './ToDoForm.css';

export function ToDoForm(props) {
    const { onClickHandler, ...rest } = props
    return (
        <form className=''>
            <input
                type="text"
                {...rest}
            />
            <button type='button' onClick={onClickHandler}>Создать</button>
        </form>
    )
}

