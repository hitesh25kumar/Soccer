import React from 'react';
import Layout from './HOC/Layout';
import { Switch} from 'react-router-dom';

import PrivateRoutes from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import Home from './components/Home/Home';
import SignIn from './components/signin/index'; 
import TheTeam from './components/Theteam/Theteam';
import TheMatches from './components/Thematches';
import NotFound from './components/ui/not_found';
import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AddEditMatch from './components/admin/matches/addEditMatch';
import AdminPlayers from './components/admin/players';
import AddEditPlayers from './components/admin/players/AddEditPlayers';

const Routes = (props) => {
  console.log(props)
  return(
    <Layout>
     <Switch>
     <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers} />
     <PrivateRoutes {...props} path="/admin_players/add_players" exact component={AddEditPlayers} />       
     <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
     <PrivateRoutes {...props} path="/admin_matches" exact component={AdminMatches} />
     <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
       <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
      <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard} />
      <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
     <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
     <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
     <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
     <PublicRoute {...props} restricted={false}  component={NotFound}/>
     </Switch>
 
    </Layout>
  )
}
export default Routes;
