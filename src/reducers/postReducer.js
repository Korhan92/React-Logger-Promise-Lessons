const initialState= {
    fetching:false,
    fetched:false,
    posts:[],
    error:null
}

// export default function postReducer(state=initialState,{type,payload}) {

//      switch (type) {
//          case "FETC_POSTS_START":
//              return {...state,fetching:true};

//              case "FETCH_POSTS_ERROR":
//              return {...state,
//                 fetching:false,
//                 error:payload};

//              case "RECEIVE_POST":
//                  return {...state,
//                  fetching:false,
//                 fetched:true,
//             posts:payload};

     
//          default:
//            return state; 
//      }
    
// }

export default function postReducer(state=initialState,{type,payload}) {

    switch (type) {
        case "CUSTOMTYPE_PENDING":
            return {...state,fetching:true};

            case "CUSTOMTYPE_REJECTED":
            return {...state,
               fetching:false,
               error:payload};

            case "CUSTOMTYPE_FULFILLED":
                return {...state,
                fetching:false,
               fetched:true,
           posts:payload};

    
        default:
          return state; 
    }
   
}
