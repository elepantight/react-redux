export const depositMoney = (amount) => {
  return (dipatch) => {
    dipatch({
      type: "deposit",
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};
