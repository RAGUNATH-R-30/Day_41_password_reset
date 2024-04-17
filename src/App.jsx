import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Routes ,Route,useNavigate} from 'react-router-dom'
import Creatuser from './Creatuser'
import Forgot_Password from './Forgot_Password'
import NewPassword from './NewPassword'
import PasswordUpdated from './PasswordUpdated'

function App() {

  return (
<>
<BrowserRouter>
<Routes>
  <Route path = "/forgotpassword" element={<Forgot_Password/>}/>
  <Route path = "/" element={<Creatuser/>}/>
  <Route path = "/newpassword" element={<NewPassword/>}></Route>
  <Route path='/passwordupdated' element = {<PasswordUpdated/>}></Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
