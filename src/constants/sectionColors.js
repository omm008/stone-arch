/*
  SECTION ZONING COLORS
  
  Design Rule: Color behaves like zoning ink on an architectural drawing
  - Functional, not decorative
  - Sparse, not dominant
  - Applied to lines, markers, labels, not surfaces
  
  All colors are:
  - Low saturation
  - Readable on off-white
  - Never used as full backgrounds
*/

export const SECTION_COLORS = {
  home: {
    name: 'Blueprint Ink',
    intent: 'Orientation & introduction',
    color: '#2563eb', // Muted blue - blueprint reference
    rgb: '37, 99, 235',
  },
  projects: {
    name: 'Construction Ink',
    intent: 'Work / execution phase',
    color: '#dc2626', // Muted red - construction marking
    rgb: '220, 38, 38',
  },
  about: {
    name: 'Annotation Ink',
    intent: 'Thought & philosophy',
    color: '#059669', // Muted green - annotation
    rgb: '5, 150, 105',
  },
  contact: {
    name: 'Approval Ink',
    intent: 'Closure & action',
    color: '#7c3aed', // Muted purple - approval stamp
    rgb: '124, 58, 237',
  },
};

/**
 * Get section color based on pathname
 * @param {string} pathname - Current route pathname
 * @returns {object} Section color object
 */
export const getSectionColor = (pathname) => {
  if (pathname === '/') return SECTION_COLORS.home;
  if (pathname.startsWith('/projects')) return SECTION_COLORS.projects;
  if (pathname.startsWith('/about')) return SECTION_COLORS.about;
  if (pathname.startsWith('/contact')) return SECTION_COLORS.contact;
  return SECTION_COLORS.home; // Default fallback
};

/**
 * Get section name from pathname
 * @param {string} pathname - Current route pathname
 * @returns {string} Section name
 */
export const getSectionName = (pathname) => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'home';
};
