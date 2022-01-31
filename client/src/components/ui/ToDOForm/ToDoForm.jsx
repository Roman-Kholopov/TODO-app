
export function ToDoForm(props) {
    const { onClickHandler, buttonName, buttonType, ...rest } = props

    return (
        <form>
            <input
                {...rest}
            />
            <button type={buttonType} onClick={onClickHandler}>{buttonName || 'Создать'}</button>
        </form>
    )
}

