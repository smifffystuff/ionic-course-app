import React from 'react';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabs,
} from '@ionic/react';
import {Route, Redirect} from 'react-router-dom';
import {IonReactRouter} from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import {list, trophyOutline} from 'ionicons/icons';

/* Theme variables */
import './theme/variables.css';
import Courses from './pages/Courses';
import CourseGoals from './pages/CourseGoals';
import AllGoals from './pages/AllGoals';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/courses" exact>
            <Courses />
          </Route>
          <Route path="/course-goals">
            <CourseGoals />
          </Route>
          <Route path="/all-goals">
            <AllGoals />
          </Route>
          <Redirect to="/courses" />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="all-goals" href="/all-goals">
            <IonIcon icon={list} />
            <IonLabel>All Goals</IonLabel>
          </IonTabButton>
          <IonTabButton tab="courses" href="/courses">
            <IonIcon icon={trophyOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
