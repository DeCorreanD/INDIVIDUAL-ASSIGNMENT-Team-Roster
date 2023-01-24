import React, { useEffect, useState } from 'react';
import { favMember } from '../../components/api/animaData';
import MemberCard from '../../components/MemberCard';
import { useAuth } from '../../utils/context/authContext';

export default function Favorite() {
  const { user } = useAuth();
  const [members, setMembers] = useState([]);

  const getFavoriteMember = () => {
    favMember(user.uid).then(setMembers);
  };

  useEffect(() => {
    getFavoriteMember();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line no-shadow
    <div>{members?.map((members) => (
      <MemberCard key={members.firebaseKey} authorObj={members} onUpdate={getFavoriteMember} />
    ))}
    </div>
  );
}
