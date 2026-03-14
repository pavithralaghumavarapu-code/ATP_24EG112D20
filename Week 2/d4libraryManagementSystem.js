class Book{
    title
    author
    pages
    isAvailable
    constructor(title,author,pages,isAvailable){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }
    borrow(){
            this.isAvailable=false
    }
    returnBook(){
            this.isAvailable=true
    }
    getInfo(){
            return `the ${this.title} by ${this.author} is(${this.pages}pages)`
    }
    isLongBook(){
             if(this.pages.length>300)
                return true 
            else return false
    }
}
 let obj1=new Book('Dragon','Raj',200,true)
  let obj2=new Book('Harrypoter','Jk',400,true)
   let obj3=new Book('The Achiever','pavi',800,false)
    let obj4=new Book('The Honesty','ranveer',200,true)
     let obj5=new Book('Dragon','Rida',500,false)

     //diplay info
     console.log(obj1.getInfo())
     console.log(obj2.getInfo())
     console.log(obj3.getInfo())
      

     console.log(obj1.isAvailable)