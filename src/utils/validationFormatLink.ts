export function validationLinkedin(url: string) {
  const regex = /https:\/\/(www\.)?linkedin\.com\/in\/[\w\-]+\/?/i;
  if (!url.match(regex)) {
    throw Error("Format Validation Linkedin Account Error");
  }
  return url;
}

export function validationIntagram(url: string) {
  const regex = /https:\/\/(www\.)?instagram\.com\/[\w\-]+\/?/i;
  if (!url.match(regex)) {
    throw Error("Format Validation Instagram Account Error");
  }
  return url;
}
