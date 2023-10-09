

export interface BannerTypes {
    
        banner_content: {
          title: string
          content: string
        }
        services_block: {
          preTitle: string
          title: string
        },
        team_block: {
          preTitle: string
          title:string
        }
      
}


export interface ServicePageTypes {
  
    services_block: {
      preTitle: string
      title: string
    },

    team_block: {
      preTitle: string
      title: string
    }
  
}


export interface ServicesTypes {
  
    id: string
    image: string
    title:string
    description: string
    icon: string
  
}


export interface TeamTypes {
  
    id: string
    first_name: string
    last_name: string
    avatar: string
    position: string
  
}





