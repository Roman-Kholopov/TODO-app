import { useState } from 'react'

import { ToDoForm } from '../ui/ToDOForm'

export function TodoForm(props) {
    const [todoName, setTodoName] = useState()

    const onClickHandler = () => {
        console.log(todoName)
    }

    const onChangeHandler = (e) => {
        setTodoName(e.target.value)
    }

    return <ToDoForm 
                onClickHandler={onClickHandler}
                onChange={onChangeHandler}
                buttonName="Создать" 
                placeholder="Введите название"
                buttonType="button"
            />
}