class Student {

    constructor(name, matricNo, major){

        this.name = name;
        this.matricNo = matricNo;
        this.major= major;
    }

    set Name(name){

        this.name = name;
    }
    
    set MatricNo(matricno){

        this.matricNo = matricno;
    }
    
    set Major(major){

        this.major = major;
    }
    
    get Name(){
        return this.name = name;
        
    }
    get MatricNo(){

    return this.matricNo = matricno;
}

    get Major(){
        
        return this.major = major;
    }



    display(){

        console.log(`Name: ${this.name}`);
        console.log(`Matric no: ${this.matricNo}`);
        console.log(`major: ${this.major}`);

    }

}

export{Student};