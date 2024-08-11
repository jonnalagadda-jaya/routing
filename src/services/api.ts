import { Student } from "../typescomponents/types";

export async function getStudent(){
        try {
            const response = await fetch("https://fakeuserapi.vercel.app/api/allUsers")
            if(!response.ok){
                return ("Failed to Fetch Data")
            }
            const data = await response.json()
            console.log(data.students)
            return data.students
        } catch (error) {
            console.log("Error", error)
        }
}

export async function createStudent(student:Student){
    try {
        const response = await fetch("https://fakeuserapi.vercel.app/api/postUser",{
            method: "POST",
            body: JSON.stringify(student)
        })
        if(!response.ok){
            throw new Error ("Failed to Create Data")
        }
        const data = await response. json();
        return data;
    } catch (error) {
        console.log("Error", error)
        throw error;
    }
}


  