export class PostListDto {
    title: string;
    slug: string;
    intro: string;
  }

export class PostDetailDto {
    title: string;
    slug: string;
    intro: string;
    sections: Array<PostSectionDto>;
  }

export class PostSectionDto {
    title: string;
    description: string;
  }
