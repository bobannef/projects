    

     export function generateLabels(daysAgo) {

     let arr=[]
     for(let i=0; i < daysAgo; i++) {
      
      const today=new Date()
      const startDate=today.getDate()
      const currentDate=today.setDate(startDate - i)
      const formattedDate=formatDate(currentDate)
      arr.push(formattedDate)
      
        }
      return arr
     }


     export function formatDate(dateNumber) {
        const date=new Date(dateNumber)
        return date.toLocaleDateString('en-gb')
     }


