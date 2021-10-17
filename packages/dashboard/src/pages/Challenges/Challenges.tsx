import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import ChallengeForm from '../../features/challenge/ChallengeForm';
import ChallengeList from '../../features/challenge/ChallengeList';
import { useParams } from 'react-router-dom';
import { selectChallenge } from '../../features/challenge/challengeSlice';
import { useAppSelector } from '../../tools/hooks';

const Challenges = () => {
  const challenges = useAppSelector(selectChallenge);
  const { id } = useParams<{ id: string }>();

  if (id) {
    const currentChallenge = challenges.find(
      (challenge) => challenge.id === parseInt(id)
    );

    return (
      <React.Fragment>
        <AppPageHeader title={currentChallenge?.challenge_name} />
        <ChallengeForm
          key={currentChallenge?.id}
          challenge={currentChallenge}
        />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <AppPageHeader title="Список челенджей" />
      <ChallengeForm />
      <ChallengeList />
    </React.Fragment>
  );
};

export default Challenges;
