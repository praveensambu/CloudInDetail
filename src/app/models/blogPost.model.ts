export interface IBlogPost {
   postId: string;
   category: string;
   categoryId: string;
   title: string;
   tags: string;
   htmlContent: string;
   datePosted: string;
   postedBy: string;
   slug: string;
   intro: string;
   headerPhotoUrl: string;
}


export interface ICategory {
   id: number;
   name: string;
 }
