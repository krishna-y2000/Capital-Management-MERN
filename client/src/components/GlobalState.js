import React,{createContext,useReducer} from 'react';
import axios from "axios";
// initial state
const initialState={
    transactions : [],
    error:null,
    loading: true
}
const AppReducer =(state,action) =>{
    switch(action.type){
       case "Delete":
           return{
               ...state,
               transactions: state.transactions.filter(transaction =>
                   transaction._id !== action.payloadValue)               
           }
        case "Add":
            return{
                ...state,
                transactions: [ ...state.transactions,action.payloadValue]
            }
        case "get_transaction":
            return {
                ...state,
                loading:false,
                transactions: action.payloadValue
            }
        case "error_transaction":
            return {
                ...state,
                error: action.payloadValue
            }
        
        default: 
            return state
    }
}

// create Context
 export const GlobalContext = createContext(initialState);
 // Provider component
 export const GlobalProvider = ({ children }) =>{
 const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
 async function getTransaction(){
        try{
        const res = await axios('/home')
        dispatch({
            type:"get_transaction",
            payloadValue: res.data.data
            })
        }
        catch(err){
            dispatch({
                type:"error_transaction",
                payloadValue: err.response.data.error
            })
        }
    }

    async function deleteTransaction(id) {
        try {
          await axios.delete(`/home/${id}`);
    
          dispatch({
            type: 'Delete',
            payload: id
          });
        } catch (err) {
          dispatch({
            type: 'error_transaction',
            payload: err.response.data.error
          });
        }
      }

     async function AddTransaction(transaction){
        const config = {
            headers:{
                'Content-Type' : 'application/json' 
            }
        } 
        try{
            const res = await axios.post('/home',transaction,config);
            dispatch({
                type:"Add",
                payloadValue:res.data.data
            })
        }
        catch(err){
            dispatch({
                type:"error_transaction",
                payloadValue: err.response.data.error
            })
        }
       
    }
      return(
          <GlobalContext.Provider value={{ transactions: state.transactions ,
           deleteTransaction,
           AddTransaction,
           getTransaction,
           error: state.error,
           loading: state.loading}} >
              {children}
          </GlobalContext.Provider>
      )
 }