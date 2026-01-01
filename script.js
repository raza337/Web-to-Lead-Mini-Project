function handlerSubmit() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");
  console.log(inputdate.value);
  let dateformatted = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = dateformatted;
}
