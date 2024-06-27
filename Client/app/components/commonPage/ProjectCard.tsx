import React from 'react';

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-40">
        <img src={imageSrc} alt="Project Image" className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href="#" className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
          Register
        </a>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const projects = [
    {
      id: 1,
      imageSrc: 'https://thumbs.dreamstime.com/b/handsome-man-points-his-fingers-to-right-young-gray-t-shirt-smiling-pointing-isolated-white-background-copy-space-173102777.jpg',
      title: 'Post A Project',
      description: 'Embark on a journey of innovation and collaboration. Post your project and let us create something extraordinary together!',
    },
    {
      id: 2,
      imageSrc: 'https://www.shutterstock.com/image-photo/photo-attractive-pretty-charming-lady-260nw-1784422487.jpg',
      title: 'Apply for a Project',
      description: 'Driven by innovation and a commitment to excellence, I am eager to bring my expertise to your project. Let us make a difference!',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
