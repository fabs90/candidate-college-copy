export const fetchCategories = async (axios: any) => {
    const response = await axios.get(`https://resource.candidatecollegeind.com/api/article/categories`);
    return response.data.data
}