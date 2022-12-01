import { createSlice } from "@reduxjs/toolkit";

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        createAnecdote(state, action){
            state.push(action.payload)
        },
        voteAnecdote(state, action){
            const id = action.payload
            const anecdoteToChange = state.find(elem => elem.id === id)
            const updatedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes+1 }
            return state.map(elem => elem.id === id ? updatedAnecdote : elem).sort((a,b) => b.votes - a.votes)
        },
        appendAnecdote(state, action){
            state.push(action.payload)
        },
        setAnecdotes(state, action){
            return action.payload
        }
    }
})

export const { createAnecdote, voteAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer