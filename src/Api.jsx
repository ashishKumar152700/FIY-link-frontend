import axios from "axios"
import PhoneUI from "./PhoneUI";
const Api=()=>{
    const handleclick=()=>{
        axios.get('https://reqres.in/api/users?page=1').then((response)=>{
            console.log(response.data.data);
            
        }).catch((error)=>{
         console.log(error);
        })
    }
    return(
     
        <>
          <button onClick={handleclick}> click me </button>
             <PhoneUI
            
            name={Name}
            
            lstoflinks={null}
            lstofotherlinks={null}
            lstofproducts={null}
            handleImageChange={null}
            selectedImage={null}
            about={null}
            />
            
             
        
        </>
    )
}
export default Api;
