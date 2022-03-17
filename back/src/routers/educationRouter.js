import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();
educationRouter.use(login_required);

educationRouter.post("/education/create", async (req, res, next) => {
  // 학력 생성하기
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // get request datawz
    const user_id = req.currentUserId;
    const school = req.body.school;
    const major = req.body.major;
    const position = req.body.position;

    const newEducation = await educationService.addEducation({
      user_id,
      school,
      major,
      position,
    });

    if (newEducation.errorMessage) {
      throw new Error(newEducation.errorMessage);
    }

    res.status(200).json(newEducation);
  } catch (error) {
    next(error);
  }
  // add education finish
});

educationRouter.get("/educations/:id", async (req, res, next) => {
  // 학력 id를 기준으로 확인
});

educationRouter.put("/educations/:id", async (req, res, next) => {
  // 학력 id를 기준으로 수정
});

educationRouter.get("/educationlist/:id", async (req, res, next) => {
  // 사용자 id를 기준으로 확인
});

export { educationRouter };