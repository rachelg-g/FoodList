import { createContext } from "react";

export interface Food {
  title: String;
  category: String;
}

export interface FoodList {
  foods: Food[];
}

export const foodData = {
  foods: [
    {
      title: "피자",
      category: "양식"
    },
    {
      title: "비빔밥",
      category: "한식"
    },
    {
      title: "치킨",
      category: "한식"
    },
    {
      title: "김치찌개",
      category: "한식"
    },
    {
      title: "소갈비찜",
      category: "한식"
    },
    {
      title: "포모도르 파스타",
      category: "양식"
    },
    {
      title: "짜장면",
      category: "중식"
    },
    {
      title: "초밥",
      category: "일식"
    }
  ]
};

export enum FoodType {
  KOREAN = '한식',
  CHINESE = '중식',
  JAPANESE = '일식',
  WESTERN = '양식'
}

export const FoodContext = createContext<FoodList>(foodData);
