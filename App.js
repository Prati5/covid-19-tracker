import React from 'react';
import './App.css';
import './components/LoginNavbar';
// import CommonLogin from'./components/CommonLogin';
import Home from './components/Admindashboard/Home';
import Overview from './components/Admindashboard/Overview';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Doctors from './components/Admindashboard/Doctors';
import AddPatients from './components/Admindashboard/AddPatients';
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorsLogin';
import PatientInformation from './components/Patient/PatientInformation';
import DoctorHomePage from './components/Doctordashboard/DoctorHomePage';
import Logout from './components/Logout';
import EditPatients from './components/Doctordashboard/EditPatient';
import UpdatePatients from './components/Admindashboard/Updatepatients';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route exactpath ="signin" component = {CommonLogin} /> */}
          <Route exact path="/" component={AdminLogin} />
          <Route exact path="/login" component={AdminLogin} />
          <Route exact path="/home" component={Home} />
          <Route path ="/plogin" exact component={PatientLogin} />
          <Route path ="/addpatients" component={AddPatients} />
          <Route path ="/doctors" component={Doctors} />
          <Route path ="/doctorlogin" component = {DoctorLogin}/>
          <Route path ="/patientinfo"component= {PatientInformation}/> 
          <Route path ="/doctorinfo" component = {DoctorHomePage} />
          <Route path ="/overview" component = {Overview} />
          <Route path ="/logout" component= {Logout}/>
          <Route path ="/editpatients" component= {EditPatients}/>
          <Route path ="/update" component = {UpdatePatients} />
          <Route exact path="**" component={AdminLogin} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
