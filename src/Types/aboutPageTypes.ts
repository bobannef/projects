

export interface PageBannerTypes {
    about_block: {
        preTitle: string
        title: string
        first_paragraph: string
        years:string
        second_paragraph: string
        slogan: string
        image_one: string
        image_two: string
      }
      team_block: {
        preTitle: string;
        title: string;
      };
}

export interface FeaturedTypes {
    feature_block: {
        preTitle: string
        title: string
        first_paragraph: string
        image_one: string
        image_two: string
        usp_items: [
          {
            id: string
            title: string
            content: string
            icon: string
          },
            
        ]

      }
}




