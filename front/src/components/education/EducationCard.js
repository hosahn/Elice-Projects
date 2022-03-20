import { Card, Button } from "react-bootstrap";
import EducationEditForm from "./EducationEditForm";

function EducationCard({
  portfolioOwnerId,
  education,
  setIsEditing,
  setUser,
  isEditing,
  isEditable,
}) {
  const currentId = education?.id;
  console.log(currentId);
  const school = education?.school;
  const major = education?.major;
  const position = education?.position;
  const current = { currentId, school, major, position };

  return (
    <div className="mb-2 ms-3 mr-5">
      <div>
        {isEditing ? (
          <EducationEditForm
            portfolioOwnerId={portfolioOwnerId}
            current={current}
            setUser={setUser}
            setIsEditing={setIsEditing}
          />
        ) : (
          <Card.Text>
            <div className="justify-content-between align-items-center mb-2 row">
              <div className="col">
                {school} <br />
                <span className="text-muted">{major}</span> <br />
                <span className="text-muted">{position}</span>
              </div>
              <div className="col - lg - 1 col">
                {isEditable && (
                  <Button
                    variant="outline-info"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    편집
                  </Button>
                )}
              </div>
            </div>
          </Card.Text>
        )}
      </div>
    </div>
  );
}

export default EducationCard;
