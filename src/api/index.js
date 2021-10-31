export const getSearchId = async () => {
  try {
    const response = await fetch("https://front-test.beta.aviasales.ru/search");
    if (!response.ok) {
      throw new Error("Ответ сети был не ok.");
    }

    return response.json();
  } catch (error) {
    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
  }
};

export const loadAviaTickets = async (id) => {
  try {
    const response = await fetch(
      "https://front-test.beta.aviasales.ru/tickets?searchId=" + id
    );
    if (!response.ok) {
      return await loadAviaTickets(id);
    }

    return response.json();
  } catch (error) {
    console.log("Возникла проблема с вашим fetch запросом: ", error.message);
  }
};
