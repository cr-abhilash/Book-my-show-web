import TutorialDataService from "../services/tutorial.service";

// export const actionCreate=(tittle)=>{
//     return{
//         type:'CHANGE_TITLE',
//         value:tittle
//     }
// }

export const createTitle=(getValue)=>{
    return{
        type:"CREATE_TITLE",value:getValue
      
        }
    }

    export const createTableValue=(data)=>{
        return(dispatch)=>{
            TutorialDataService.create(data)
      .then(response => {
        // this.setState({
        //   available:response.data.available,
        //   id: response.data.id,
        //   title: response.data.title,
        //   description: response.data.description,
        //   Booking: response.data.Booking,

        //   submitted: true
        // });
        console.log(response.data);
        dispatch({type:"CREATE_TABLE",value:response.data})
      })
      .catch(e => {
        console.log(e);
      });
          
            }
        }

        export const newTutorial=()=>{
            return{
                type:"NEW_TUTORIAL",value:""
              
                }
            }

            
                export const changeDescriptionAnother=(getValue)=>{
                    return{
                        type:"CHANGE_DESCRIPTION1",value:getValue
                      
                        }
                    }
            
                    export const changeAvailableAnother=(getValue)=>{
                        return{
                            type:"CHANGE_AVAILABLE1",value:getValue
                          
                            }
                        }