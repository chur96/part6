import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { notify, removeNotify } from "./../reducers/notificationReducer"


const AnecdoteList = (props) => {

    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
        dispatch(notify(`you voted for ${anecdotes.find(elem => elem.id === id).content}`))
        setTimeout(() => dispatch(removeNotify()), 5000)
      }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
                </div>
            )}
      </div>
    )
}

export default AnecdoteList