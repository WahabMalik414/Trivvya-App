const generateApiRequest = (
  amount: string,
  category: string,
  difficulty: string
) => {
  return `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
};

export default generateApiRequest;
