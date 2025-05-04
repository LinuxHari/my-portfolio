const getExperience = () => {
    const startDate = new Date("2023-10-09");
    const now = new Date();
  
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    const experience = `${years} year${years !== 1 ? "s" : ""} ${months} month${months !== 1 ? "s" : ""}`
    return experience
}

export default getExperience;