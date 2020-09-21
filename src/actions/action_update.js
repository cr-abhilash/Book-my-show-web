import TutorialDataService from "../services/tutorial.service";


export const getTutorialValue=(id)=>{
    return(dispatch)=>{
        TutorialDataService.get(id)
      .then(response => {
        console.log(response.data,"action");
        dispatch({type:"GET_TUTORIAL",value:response.data})

      })
      .catch(e => {
        console.log(e);
      });
}
}

export const changeTitle=(getValue)=>{
    return{
        type:"CHANGE_TITLE",value:getValue
      
        }
    }
    export const changeDescription=(getValue)=>{
        return{
            type:"CHANGE_DESCRIPTION",value:getValue
          
            }
        }

        export const changeAvailable=(getValue)=>{
            return{
                type:"CHANGE_AVAILABLE",value:getValue
              
                }
            }

            export const updateBookingValue=(id,data)=>{
                return(dispatch)=>{
                    TutorialDataService.update(id, data)
                .then(response => {

                    console.log(response.data);
                    dispatch({type:"UPDATE_BOOKING",value:response.data})
            
                  })
                  .catch(e => {
                    console.log(e);
                  });
            }
            }

            export const updateTutorialValue=(id,currentTutorial)=>{
                return(dispatch)=>{
                    TutorialDataService.update(id, currentTutorial)
                .then(response => {

                    console.log(response.data);
                    dispatch({type:"UPDATE_TUTORIAL_VALUE",value:response.data})
            
                  })
                  .catch(e => {
                    console.log(e);
                  });
            }
            }
            export const deleteTutorialValue=(deleteTutorial)=>{
                return(dispatch)=>{
                TutorialDataService.delete(deleteTutorial)
      .then(response => {
        console.log(response.data,"afterDElete");
        dispatch({type:"DELETE_TUTORIAL",value:""})
            }).catch(e => {
                console.log(e);
              });
        }

    }