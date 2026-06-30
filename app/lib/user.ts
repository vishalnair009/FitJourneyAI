export type UserProfile = {
    name: string;
    age: number;
    height: number;
    weight: number;
    targetWeight: number;
    goal: string;
  };
  
  export const currentUser: UserProfile = {
    name: "Vishal",
    age: 33,
    height: 180,
    weight: 98,
    targetWeight: 80,
    goal: "Lose Weight",
  };