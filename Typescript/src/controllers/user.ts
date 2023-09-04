import { Request,Response } from 'express';
import {addUserToDB, updateUserData} from '../models/user';

const registerUser = (req:Request,res:Response) => {

    const userName:string = "Divyanshu";
    const password:string = "Password";
    const age:number = 20;

    const result = addUserToDB(userName,password,age);

    res.send("User registration!");
    console.log(result);
}

const checkTypesAndInterface = (req:Request,res:Response) => {

    interface Point{
        readonly x:number,
        readonly y:number
    }

    let num:Point = {x:1, y:4};
   
    type lockedState = "locked" | "unlocked"; 
    let xState: lockedState = "locked";

    const myUser = {
        id:1,
        uname:"Divyanshu",
        password:"PassworD",
        age:20,
        is_active: false,
        accountStatus:""
    }

    const result = updateUserData(myUser);
    res.send(result);
}

interface Student{
    name:String,
    age: Number
}

interface Student{
    level:String
}

const mergeInterface = (req: Request, res: Response) =>{

    const akarsh:Student  = {name:"Divyanshu", age:20, level:"BTech"};
}


class Employee{
    ename:String;
    salary:Number;
    constructor(name:String, salary:Number){
        this.ename = name;
        this.salary = salary;
    }
}

class EmployeeWithAge extends Employee {
    age:Number = 0;
}

const relatedToClass = (req: Request, res: Response) => {
    const Ramesh = new EmployeeWithAge("Rohit", 20000);
    Ramesh.salary = 30000;
    Ramesh.age = 21;
}

export {registerUser,checkTypesAndInterface};