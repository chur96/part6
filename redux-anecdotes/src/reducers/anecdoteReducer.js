import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        vote(state, action){
            const updatedAnecdote = action.payload
            return state.map(elem => elem.id === updatedAnecdote.id ? updatedAnecdote : elem).sort((a,b) => b.votes - a.votes)
        },
        appendAnecdote(state, action){
            state.push(action.payload)
        },
        setAnecdotes(state, action){
            return action.payload
        }
    }
})

export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes.sort((a,b) => b.votes - a.votes)))
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(newAnecdote))
    }
}

export const voteAnecdote = (id) => {
    return async dispatch => {
        const updatedAnecdote = await anecdoteService.vote(id)
        dispatch(vote(updatedAnecdote))
    }
}

export default anecdoteSlice.reducer