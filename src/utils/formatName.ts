export const formatName = (name: any) => {
  // Remove extra space from setence
  const words = name.trim()
                    .replace(/\s+/g, " ")
                    .split(" ");

  // Take first two word
  const firstTwoWords = words.slice(0, 2)
                             .map((word: any) => word.charAt(0).toUpperCase() + word.slice(1))
                             .join(" ");
  
  // Next word is taken just it's first letter
  const initials = words.slice(2)
                        .map((word: any) => word.charAt(0).toUpperCase())
                        .join(". ");

  // Combine sentence from previous variables 
  const formattedName = `${firstTwoWords} ${initials}`;

  return formattedName;
};
