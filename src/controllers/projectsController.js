import Project from '../models/projects';

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    const RESPONSE = {
      status: true,
      data: projects
    };
    res.json(RESPONSE);
  } catch (error) {
    const RESPONSE = {
      status: false,
      message: 'Error: Projects could not get',
      data: error
    };
    res.status(500).json(RESPONSE);
  }

}

export async function getOneProject(req, res) {
  try {
    const { id } = req.params;
    const project = await Project.findOne({
      where: {
        id 
      }
    });
    const RESPONSE = {
      status: true,
      data: project
    };
    res.json(RESPONSE);
  } catch (error) {
    const RESPONSE = {
      status: false,
      message: 'Error: Projects could not get',
      data: error
    };
    res.status(500).json(RESPONSE);
  }
}

export async function createProject(req, res) {
  const { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Project.create(
      {
        name,
        priority,
        description,
      },
      {
        fields: ['name', 'priority', 'description', 'deliverydate']
      }
    );

    if (newProject) {
      const RESPONSE = {
        status: true,
        message: 'Project created successfully',
        data: newProject
      };

      res.json(RESPONSE);
      console.log(RESPONSE);
    }
  } catch (error) {
    console.log(error);
    const RESPONSE = {
      status: false,
      message: 'Error: Project could not be created',
      data: error
    };
    res.status(500).json(RESPONSE);
    console.log(RESPONSE);
  }
}

export async function deleteProject(req, res) {
  try {
    const { id } = req.params;
    const project = await Project.destroy({
      where: {
        id 
      }
    });
    const RESPONSE = {
      status: true,
      data: project
    };
    res.json(RESPONSE);
  } catch (error) {
    const RESPONSE = {
      status: false,
      message: 'Error: Projects could not delete',
      data: error
    };
    res.status(500).json(RESPONSE);
  }
}

export async function updateProject(req, res) {
  try {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;
    const projects = await Project.findAll({
      attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
      where: {
        id 
      }
    });
    if (projects.length > 0) {
      projects.forEach( async project => {
        await project.update({
          name, priority, description, deliverydate
        });
      });
    }
    const RESPONSE = {
      status: true,
      data: projects
    };
    res.json(RESPONSE);
  } catch (error) {
    const RESPONSE = {
      status: false,
      message: 'Error: Projects could not update',
      data: error
    };
    res.status(500).json(RESPONSE);
  }
}

