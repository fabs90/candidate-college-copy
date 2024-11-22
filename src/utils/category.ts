export const categoryId = (categoryInput: string, categories: any[]) => {
    for (const category of categories) {
        if (categoryInput === category.name) {
          return category.id;
        }
    }
    return 16
}