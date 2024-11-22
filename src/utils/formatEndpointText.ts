// Change Format of Endpoint to Uppercase
export const formatEndpointText = (endpoint: any) => {
  return endpoint
        .split("-")
        .map((word:any) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};