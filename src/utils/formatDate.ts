// Used to format UTC date into predetermined time conversion format
export const formatDate = (date: any) => {
  const format = {
    day: '2-digit'  as const,
    month: 'short'  as const, 
    year: 'numeric' as const 
  };

  const dateNow = new Date(date);
  
  return dateNow.toLocaleDateString('id-ID', format);
};