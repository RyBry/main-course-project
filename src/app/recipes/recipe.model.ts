export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }

    public toString(){
        return "Name: " + this.name + ", Description: "
         + this.description;
    }
}