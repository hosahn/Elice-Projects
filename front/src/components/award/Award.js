import React, { useState, useEffect } from 'react';
import * as Api from '../../api';
import { Button, Card } from 'react-bootstrap';
import AwardAddForm from './AwardAddForm';
import AwardCard from './AwardCard';

function Award({ portfolioOwnerId, isEditable }) {
  const [isAddAward, setIsAddAward] = useState(false);
  const [awardList, setAwardList] = useState([]);

  useEffect(() => {
    Api.get('awardlist', portfolioOwnerId).then((res) => setAwardList(res.data));
  }, [portfolioOwnerId]);

  return (
    <Card className="mb-3 me-3">
      <Card.Body>
        <Card.Title className="comTitle">AWARDS</Card.Title>
        {awardList !== null &&
          awardList.map((award) => (
            <AwardCard
              key={award.id}
              portfolioOwnerId={portfolioOwnerId}
              award={award}
              setAwardList={setAwardList}
              isEditable={isEditable}
            />
          ))}
        {isAddAward && (
          <AwardAddForm
            setIsAddAward={setIsAddAward}
            portfolioOwnerId={portfolioOwnerId}
            setAwardList={setAwardList}
          />
        )}
        {isEditable && (
          <div className="mt-3 text-center mb-4 row">
            <div className="col-sm-20">
              <Button
                className="plus"
                variant="dark"
                onClick={(e) => setIsAddAward(true)}
              >
                +
              </Button>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default Award;
