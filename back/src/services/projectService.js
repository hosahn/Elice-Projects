import { Project } from "../db";

class projectService{
    static async addProject({user_id,title,description,from_data,to_data}){
        const newProject ={ user_id, title, description, from_data, to_data};

        const createdNewProject =  await Project.create({newProject});
        createdNewProject.errorMessage=null;
        
        return createdNewProject;
    }
}


export {projectService}