import React from 'react'
import {useState, useEffect} from 'react'

const TodoBox = () => {


    const [todo, setTodo]= useState()
    const [todo1, setTodo1]= useState()
    const [todo2, setTodo2]= useState()
    const [todo3, setTodo3]= useState()
    const [todoid, setTodoid]= useState()
    const [todo1id, setTodo1id]= useState()
    const [todo2id, setTodo2id]= useState()
    const [todo3id, setTodo3id]= useState()

    useEffect(() => {
        fetch('http://127.0.0.1:8000/todo'
        )
          .then(res => {
            return res.json();
          })
          .then(dane => {
            setTodo(dane[0].text);
            setTodo1(dane[1].text);
            setTodo2(dane[2].text);
            setTodoid(dane[0].id);
            setTodo1id(dane[1].id);
            setTodo2id(dane[2].id);
            setTodo3(dane[3].text);
            setTodo3id(dane[3].id);
            console.log(dane)
          })
      }, [])

    return (
        <div className='box big shadow center'>
            <h1>TODO</h1>
            <a style={myStyle} href={'http://127.0.0.1:8000/todo/'+todoid}>
                <div className='todoBox shadow'>{todo }</div>
            </a>
            <a style={myStyle} href={'http://127.0.0.1:8000/todo/'+todo1id}>
                <div className='todoBox shadow'>{todo1 }</div>
            </a>
            <a style={myStyle} href={'http://127.0.0.1:8000/todo/'+todo2id}>
                <div className='todoBox shadow'>{todo2 }</div>
            </a>
            <a style={myStyle} href={'http://127.0.0.1:8000/todo/'+todo3id}>
                <div className='todoBox shadow'>{todo3 }</div>
            </a>
        </div>
    )
}

const myStyle = {
    color: 'white',
    textDecoration: 'none',
}

export default TodoBox
