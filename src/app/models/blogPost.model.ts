export interface IBlogPost {
   postId: number;
   category: string;
   categoryId : number;
   title: string;
   tags: string;
   htmlContent: string;
   datePosted: string;
   postedBy: string;
   slug : string;
   intro: string;
   headerPhotoUrl : string;
}


export interface ICategory {
   id: number;
   name: string;
 }
