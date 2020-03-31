import React from 'react';
// import {useHistory} from 'react-router-dom';
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
} from '@ionic/react';

const AllGoals: React.FC = () => {
  // const history = useHistory();
  // const changePageHandler = () => {
  //   history.push('/course-goals');
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>This works - all goals page!</h2>
      </IonContent>
    </IonPage>
  );
};
export default AllGoals;
