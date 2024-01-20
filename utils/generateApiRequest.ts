const generateApiRequest = (category: string, difficulty: string) => {
  console.log("in generate api request");
  return `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
};

export default generateApiRequest;
