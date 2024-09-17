const getSkills = async () => {
    const response = await fetch(`/functions/getSkills`);
    const skills = await response.json();
    return skills.length ? skills : [];
  };
  
  const createSkill = async (skill) => {
    const response = await fetch("/functions/createSkill", {
      body: JSON.stringify(skill),
      method: "POST",
    });
    return response.json();
  };
  
  
  const updateSkill = async (skill) => {
    const response = await fetch("/functions/updateSkill", {
      body: JSON.stringify(skill),
      method: "PUT",
    });
    return response.json();
  };
  
  const deleteSkill = async (id) => {
    const response = await fetch("/functions/deleteSkill", {
      body: JSON.stringify({ id }),
      method: "POST",
    });
    return response.json();
  };
  
  module.exports = {
    getSkills,
    createSkill,
    deleteSkill,
    updateSkill,
  };