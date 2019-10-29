export default (state = [], action) => {

  let quote

  switch (action.type){

    case 'ADD_QUOTE':
      return state.concat(action.quote)
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    
    case 'UPVOTE_QUOTE':
      return 'upvote'
    
    case 'DOWNVOTE QUOTE':
      return 'downvote'  
    
    default: 
        return state
  }

  // return state;
}
 