import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import EventsList from '../../features/events/EventsList';

const Events = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="События" />
      <EventsList />
    </React.Fragment>
  );
};

export default Events;
