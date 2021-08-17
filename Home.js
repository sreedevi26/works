import React from 'react';
import swal from 'sweetalert';
import {withRouter} from 'react-router';

class Home extends React.Component{

rea
render(){
    return(
      <div class="container" >
      <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">DIET PLANS</a>
            </li>
            <button type="button" class="btn btn-dark">SELECT YOUR PLANS</button>
          </ul>          
        </div>
      
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link disabled" href="#" >SignIn</a>
        </li>
      </ul>
          <button type="button" class="btn btn-dark">Register</button>
          </div>
    </nav>
    </div>
    
    );
}
   

}


export default withRouter(Home);