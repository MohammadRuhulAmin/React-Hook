import React,{ useState} from 'react';

function HookUseState(){
    const [userName,setUserName] = useState({
        firstName:"",
        middleName:"",
        lastName:""
    });
    return(
        <div>
            <form>
                <div>
                    <label>User First Name : </label>
                    <input type="text"
                    value={userName.firstName} 
                    onChange={e => setUserName({...userName,firstName:e.target.value})}
                    />
                </div>
                <div>
                    <label>Middle Name</label>
                    <input type="text"
                    value={userName.middleName}
                    onChange={e=>setUserName({...userName,middleName:e.target.value})}
                    />
                </div>
                <div>
                    <label>Last Name </label>
                    <input type="text"
                    value = {userName.lastName}
                    onChange = {e=>setUserName({...userName,lastName:e.target.value})}
                    />
                </div>
            </form>
            <div>
                <label>Full Name : </label>
                <span>{userName.firstName+" "}{userName.middleName+" "}{userName.lastName}</span>
                
            </div>
        </div>
    )

}


export default HookUseState;