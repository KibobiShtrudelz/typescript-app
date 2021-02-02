type ErrorMessage = {
  response: {
    data: {
      message: {
        messages: {
          message: string;
          field: string;
          id: string;
        }[];
      }[];
    };
  };
};

export type ErrorMessagePayload = { error: string };

const formatError = (err: ErrorMessage): ErrorMessagePayload => ({
  error: err.response?.data?.message[0]?.messages[0]?.message,
});

export default formatError;
