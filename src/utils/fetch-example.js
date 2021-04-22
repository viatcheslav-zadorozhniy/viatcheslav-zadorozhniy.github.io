export default function fetchExample(exampleCategory, exampleName) {
  const url = `/${exampleCategory}/${exampleName}.html`;

  return fetch(url)
    .then(x => x.text());
}
