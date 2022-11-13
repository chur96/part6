import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const addAnecdote = (e) => {
        e.preventDefault()
        const anecdote = e.target.content.value
        dispatch(createAnecdote(anecdote))
      }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name='content'/></div>
            <button type='submit'>create</button>
        </form>
    )
}

export default AnecdoteForm