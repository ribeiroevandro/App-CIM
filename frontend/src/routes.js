import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import LoginClinic from './pages/Login/Clinic';
import LoginDoctor from './pages/Login/Doctor';
import DashClinic from './pages/Dash/Clinic';
import NewDoctor from './pages/Dash/Clinic/NewDoctor';
import UpdateDoctor from './pages/Dash/Clinic/UpdateDoctor';
import DashDoctor from './pages/Dash/Doctor';
import NewPatient from './pages/Dash/Doctor/NewPatient';
import UpdatePatient from './pages/Dash/Doctor/UpdatePatient';
import DetailPatient from './pages/Dash/Doctor/DetailPatient';
import UpdateExam from './pages/Dash/Doctor/UpdateExam';
import NewPreNatal from './pages/Dash/Doctor/NewPreNatal';
import UpdatePreNatal from './pages/Dash/Doctor/UpdatePreNatal';
import Galery from './pages/Dash/Doctor/Galery';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
               <Route path="/" exact  component={Login} />
               <Route path="/loginclinic"  component={LoginClinic} />
               <Route path="/logindoctor"  component={LoginDoctor} />
               <Route path="/dashboard/clinic" component={DashClinic} />
               <Route path="/dashboard/clinic/new" component={NewDoctor} />
               <Route path="/dashboard/clinic/update/:id+"  component={UpdateDoctor} />
               <Route path="/dashboard/doctor" component={DashDoctor} />
               <Route path="/dashboard/doctor/new"  component={NewPatient} />
               <Route path="/dashboard/doctor/update/"  component={UpdatePatient} />
               <Route path="/dashboard/doctor/detail"  component={DetailPatient} />
               <Route path="/dashboard/doctor/exam/update"  component={UpdateExam} />
               <Route path="/dashboard/doctor/prenatal/new"  component={NewPreNatal} />
               <Route path="/dashboard/doctor/prenatal/update"  component={UpdatePreNatal} />
               <Route path="/dashboard/doctor/galery" component={Galery} />
            </Switch>
        </BrowserRouter>
    )
}