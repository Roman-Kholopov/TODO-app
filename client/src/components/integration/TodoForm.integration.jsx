import { useState } from 'react'

import { ToDoForm } from '../ui/ToDOForm'

export function TodoForm(props) {
    const [todoName, setTodoName] = useState()

    const onClickHandler = () => {
        console.log(todoName)
    }

    const onChangeHandler = (e) => {
        console.log(e.target.value)
    }

    return <ToDoForm 
                onClickHandler={onClickHandler}
                onChange={onChangeHandler}
                buttonName="Создать" 
                placeholder="Введите название"
                buttonType="button"
            />
}


// *2 - Сделать интеграционный компонент*
// сделать компонент который будет прокидывать нужные пропсы в (тупой) компонент формы