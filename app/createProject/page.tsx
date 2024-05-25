"use client";

import { useState, useEffect } from 'react';
import { addProjects } from "../Services/operations/ProjectHandler";
import { useUser } from "@auth0/nextjs-auth0/client";

const CreateProjectForm = () => {
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [Skill, setSkill] = useState('');
  const [BasicDetail, setBasicDetail] = useState('');
  const [image, setImage] = useState(null);  // Add state for image
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user, isLoading } = useUser();
  

 useEffect(()=>{
  setEmail(user?.email);
 }, [user])

 console.log("first", email)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('projectName', projectName);
      formData.append('projectDescription', projectDescription);
      formData.append('Skill', Skill);
      formData.append('BasicDetail', BasicDetail);
      if (image) {
        formData.append('image', image);
      } else {
        // Append a default image URL if no image is provided
        formData.append('defaultImageUrl', 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg');
      }

      const response = await addProjects(email, projectName, projectDescription, Skill, BasicDetail, image);

      if (response.status === 200) {
        setSuccess('Project added successfully!');
        setError('');
      } else {
        setError('Failed to add project.');
        setSuccess('');
      }
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Project</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="projectName" className="block text-sm font-medium text-gray-700">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Skill" className="block text-sm font-medium text-gray-700">
              Skill
            </label>
            <input
              type="text"
              id="Skill"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={Skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="BasicDetail" className="block text-sm font-medium text-gray-700">
              Basic Detail
            </label>
            <input
              type="text"
              id="BasicDetail"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={BasicDetail}
              onChange={(e) => setBasicDetail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Project Image
            </label>
            <input
              type="file"
              id="image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          {error && <p className="text-xs text-red-600 mt-2">{error}</p>}
          {success && <p className="text-xs text-green-600 mt-2">{success}</p>}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-2"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectForm;
