const generateApiRequest = (
  amount: string,
  category: string,
  difficulty: string
) => {
  console.log("in generate api request");
  return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
};

export default generateApiRequest;
