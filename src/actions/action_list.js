import TutorialDataService from "../services/tutorial.service";


export const getAllValue=()=>{
return(dispatch)=>{
    TutorialDataService.getAll()
  .then(response => {
    console.log(response.data);
    dispatch({type:"GET_ALL",value:response.data})
  })
  .catch(e => {
    console.log(e);
  });
  
}}


export const findByTitleValue=(titleName)=>{
    console.log(titleName)
    return(dispatch)=>{
        TutorialDataService.findByTitle(titleName)
      .then(response => {
        console.log(response.data,"data");
        dispatch({type:"GET_BY_TITLE",value:response.data})
      })
      .catch(e => {
        console.log(e);
      });
      
    }}
    export const removeAllValue=()=>{
        return(dispatch)=>{
            TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        dispatch({type:"DELETE_ALL",value:response.data})
      })
      .catch(e => {
        console.log(e);
      });
          
        }}

        export const changeTutorial=(getValue)=>{
            return{
    
                type:'CHANGE_TUTORIAL_INDEX',
                value:getValue
            }}   
          export const changeIndex=(getValue)=>{
                return{
        
                    type:'CHANGE_TUTORIAL_INDEX',
                    value:getValue
                }}         
    
                export const searchTitleValue=(getValue)=>{
                    return{
            
                        type:'SEARCH_TITLE',
                        value:getValue
                    }}         