import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import AwardAddForm from './AwardAddForm';
import AwardCard from './AwardCard';

function Award({ portfolioOwnerId, isEditable }) {
  const [isAddAward, setIsAddAward] = useState(false);
  const [user, setUser] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // "users/유저id" 엔드포인트로 GET 요청을 하고, user를 response의 data로 세팅함.
    Api.get(`awardlist`, portfolioOwnerId).then((res) => setUser(res.data));
  }, [portfolioOwnerId]);
  // useEffect(() => {
  //   setUser({
  //     title: 'title',
  //     description: 'description',
  //   });
  // }, []);

  return (
    <Card>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>

        {user !== null ? (
          <AwardCard
            user={user}
            setIsEditing={setIsEditing}
            isEditable={isEditable}
          />
        ) : (
          <></>
        )}

        <div className="mt-3 text-center mb-4 row">
          <div className="col-sm-20">
            <Button onClick={(e) => setIsAddAward(true)}>+</Button>
          </div>
        </div>
        {isAddAward ? (
          <AwardAddForm
            setIsAddAward={setIsAddAward}
            portfolioOwnerId={portfolioOwnerId}
            setUser={setUser}
          />
        ) : (
          <></>
        )}
      </Card.Body>
    </Card>
  );
}
export default Award;
