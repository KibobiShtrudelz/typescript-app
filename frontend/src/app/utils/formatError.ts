const formatError = (err: {
  response: {
    data: {
      message: { messages: { id: string; message: string; field: string }[] }[];
    };
  };
}): { errorMessage: string } => ({
  errorMessage: err.response?.data?.message[0]?.messages[0]?.message,
});

export default formatError;
