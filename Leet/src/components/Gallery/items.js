// Team members data with name and role
const teamMembers = [
  { name: "Ahmed El Montassir", role: "CEO & Co-Founder", department: "Leadership" },
  { name: "Otmane Haimad", role: "CTO & Co-Founder", department: "Technology" },
];

// Helper function to get image path from name
export const getImagePath = (name) => {
  // Map exact names to their actual file names (case-sensitive)
  const nameMapping = {
    "Ahmed El Montassir": "Ahmed el montassir.jpg",
    "Otmane Haimad": "otmane haimad.JPG"
  };
  
  // Check if we have an exact mapping
  if (nameMapping[name]) {
    return `/team-members/${nameMapping[name]}`;
  }
  
  // Fallback: try the name as-is with .png extension
  return `/team-members/${name}.png`;
};

// Helper function to get all available image extensions to try
export const getImageExtensions = () => ['.jpg', '.JPG', '.jpeg', '.JPEG', '.png', '.PNG'];

// Helper function to get member by index (for backward compatibility)
export const getMemberByIndex = (index) => {
  return teamMembers[index % teamMembers.length];
};

export default teamMembers;
