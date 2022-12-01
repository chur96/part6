import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const addAnecdote = async (e) => {
        e.preventDefault()
        const anecdote = e.target.content.value
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch(createAnecdote(newAnecdote))
      }

    return (
        <form onSubmit={addAnecdote}>
            <div><input name='content'/></div>
            <button type='submit'>create</button>
        </form>
    )
}

export default AnecdoteForm