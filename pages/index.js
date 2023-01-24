import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getMembers } from '../components/api/animaData';
import { useAuth } from '../utils/context/authContext';
import MemberCard from '../components/MemberCard';

function Home() {
  // Set a state for members
  const [members, setMembers] = useState([]);
  // Get user ID using useAuth Hook
  const { user } = useAuth();
  // Create a function that makes the API call to get all the members
  const getAllMembers = () => {
    getMembers(user.uid).then(setMembers);
  };
  // Make the call to the API to get all the members on component render
  useEffect(() => {
    getAllMembers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-center my-4">
      <Link href="/member/new" passHref>
        <Button>Add A Member</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {/* map over members here using MemberCard component */}
        {members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} />
        ))}
      </div>
    </div>
  );
}

export default Home;
