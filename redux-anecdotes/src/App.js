import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { setAnecdotes } from './reducers/anecdoteReducer';
import anecdoteService from './services/anecdotes'

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => 
      dispatch(setAnecdotes(anecdotes))
    )
  }, [dispatch])
   

  return (
    <div>
      <Notification></Notification>
      <h2>Anecdotes</h2>
      <AnecdoteList></AnecdoteList>
      <h2>create new</h2>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App