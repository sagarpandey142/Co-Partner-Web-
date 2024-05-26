import axios from "axios";
import { toast } from 'react-hot-toast';
import { ProjectApiDetail } from "../Api";

export const FetchProject = async () => {
  const loadingToast = toast.loading("Loading projects...");
  try {
    const response = await axios.get(ProjectApiDetail.FetchProject, {});
    toast.dismiss(loadingToast);
    toast.success("Projects fetched successfully!");
    return response;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`Error fetching projects: ${error}`);
    console.error("error", error);
  }
};

export const findProjectById = async (id) => {
  const loadingToast = toast.loading("Loading project details...");
  try {
    const response = await axios.post(ProjectApiDetail.FetchProjectById, { id });
    toast.dismiss(loadingToast);
    toast.success("Project details fetched successfully!");
    return response;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`Error fetching project details: ${error}`);
    console.error("error", error);
  }
};

export const addSavedProject = async (_id, Email) => {
  const loadingToast = toast.loading("Saving project...");
  try {
    const response = await axios.post(ProjectApiDetail.addSavedProject, { projectId: _id ,Email});
    toast.dismiss(loadingToast);
    toast.success("Project saved successfully!");
    return response;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`Error saving project: ${error}`);
    console.error("error", error);
  }
};

export const RemoveSavedProject = async (ProjectId, Email) => {
  const loadingToast = toast.loading("Removing project...");
  try {
    const response = await axios.post(ProjectApiDetail.RemoveSavedProject, { ProjectId,Email });
    toast.dismiss(loadingToast);
    toast.success("Project removed successfully!");
    return response;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`Error removing project: ${error}`);
    console.error("error", error);
  }
};

export const ApplyProject = async (email, projectid) => {
  const loadingToast = toast.loading("Applying to project...");
  try {
    const response = await axios.post(ProjectApiDetail.applyProject, { email, projectid });
    toast.dismiss(loadingToast);
    if(response){
      toast.success("Applied to project successfully!");
    }
    return response;
  } catch (error) {
    toast.dismiss(loadingToast);
    toast.error(`Error applying to project: ${error}`);
    console.error("error", error);
  }
};

export default FetchProject;



export const addProjects = async (
  email: string,
  projectName: string,
  projectDescription: string,
  Skill: string,
  BasicDetail: string,
  Category: string
) => {
  console.log("inside try");
  try {
    const response = await axios.post(ProjectApiDetail.addProject, {Email:email,projectName,projectDescription,Skill,BasicDetail, Category});

    console.log("response", response);
    return response;
  } catch (error: any) {
    console.log("error", error);
  }
};
