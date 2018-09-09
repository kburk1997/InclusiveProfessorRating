import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const reviews = [{id: 0, professorId: 0, text: "Professor Tables is excellent! I do wish he didn't make that off-color joke in class that one time, though.", accomRating:4, inclusiveRating: 4, qualityRating:5,
  redFlags: [], greenFlags: [], upvotes:0, downvotes: 0, courseTaken: "CSCI4380" },
  {id: 1, professorId: 1, text: "Professor Benson's extensive experience in the field and her compassion for people make her an outstanding professor. I would definitely take her course again!",
  accomRating:5, inclusiveRating: 5, qualityRating:5,
  redFlags: [], greenFlags: [0,11,12], upvotes:0, downvotes: 0, courseTaken: "CRIM2100"},
  {id: 2, professorId: 2, text: "I found it impossible to learn in Professor Scott's class due to his overuse of innuendos and stereotypes. He also played multiple cruel 'pranks' on me, which made my anxiety worse throughout the semester.",
  accomRating:0, inclusiveRating: 0, qualityRating:1, redFlags: [1,2], greenFlags: [], upvotes:2, downvotes:0, courseTaken: "MGMT2100"
  },
  {id: 3, professorId: 2, text: "Professor Scott's diversity in business 'lesson' was a horrible mistake. I still have nightmares about being in his class to this day.",
  accomRating:1, inclusiveRating: 0, qualityRating:0, redFlags: [2,3,5], greenFlags: [], upvotes:2, downvotes:0, courseTaken: "MGMT2100"
  },
  {id: 4, professorId: 3, text: "Good news everyone! Hubert Farnsworth is incredibly brilliant. However, he does seem to enjoy tormenting people in parallel universes a bit too much.", accomRating:4, inclusiveRating: 3, qualityRating:4,
redFlags: [4], greenFlags: [11,12], upvotes:0, downvotes: 0, courseTaken:"PHYS1200"}];
  
  return {reviews};
  }

}