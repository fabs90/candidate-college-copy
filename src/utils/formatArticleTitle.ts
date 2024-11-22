export const formatArticleTitle = (data: string, split: number) => {
  const title = data.split(" ");
  const truncateTitle = title.length > split ? `${title.slice(0, split).join(" ")} ...` : data;
  
  return truncateTitle;
};