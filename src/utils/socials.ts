export function generateShareLinks(articleTitle: string, articleURL: string): { twitter: string; whatsapp: string; instagram: string } {
    const encodedArticleTitle = encodeURIComponent(articleTitle);
    const encodedArticleURL = encodeURIComponent(articleURL);
  
    const twitterLink = `https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20article%3A%20${encodedArticleTitle}%20-%20${encodedArticleURL}`;
    const whatsappLink = `whatsapp://send?text=Check%20out%20this%20awesome%20article%3A%20${encodedArticleTitle}%20-%20${encodedArticleURL}`;
    const instagramLink = `https://www.instagram.com/create/caption/?text=Check%20out%20this%20awesome%20article%3A%20${encodedArticleTitle}%20-%20${encodedArticleURL}`;
  
    return {
      twitter: twitterLink,
      whatsapp: whatsappLink,
      instagram: instagramLink,
    };
}