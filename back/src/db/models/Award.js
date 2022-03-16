import { AwardModel } from "../schemas/award";

class Award {
  // 수상 내역을 새로 생성합니다.
  static async create({ newAward }) {
    const createNewAward = await AwardModel.create(newAward);
    return createNewAward;
  }

  // 사용자 id로 수상 내역 찾기
  static async findById({ user_id }) {
    const userAward = await AwardModel.findOne({ id: user_id });
    return userAward;
  }

  // 수상 내역 수정하기
  static async update() {}
}

export { Award };