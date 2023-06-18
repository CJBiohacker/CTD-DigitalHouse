import { mount } from "@testing-library/react";
import Details from "./Details";
import Cards from "./Cards";

describe("Details", () => {
  it("should render the hotel details when the hotel is found", () => {
    const hotel = {
      id: 1,
      name: "Royal Rio Palace Hotel",
      img: "https://inglesespraia.com.br/wp-content/uploads/2021/03/piscina-alta-scaled.jpg",
      daily_price: "R$500,00",
      stars: 5,
      city: "Rio de Janeiro",
      description:
        "Localizado a 500 m da Praia de Copacabana, o Royal Rio Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô Cardeal Arcoverde e a 10 km do Aeroporto Santos Dumont.",
      wifi: true,
      air_conditioned: true,
      phone: "(22)98650000",
      email: "htl@gmail.com",
    };
    const wrapper = mount(<Details hotel={hotel} />);
    const card = wrapper.find(".MuiCard-root");
    expect(card.exists()).toBe(true);
    expect(card.text()).toContain(hotel.name);
    expect(card.text()).toContain(hotel.city);
    expect(card.text()).toContain(hotel.description);
  });

  it("should render a message when the hotel is not found", () => {
    const wrapper = mount(<Details hotel={null} />);
    const message = wrapper.find(".MuiTypography-root");
    expect(message.text()).toContain("Hotel not found.");
  });
});

describe("Cards", () => {
  it("should render a list of cards", () => {
    const hotels = [
      {
        id: 1,
        name: "Royal Rio Palace Hotel",
        img: "https://inglesespraia.com.br/wp-content/uploads/2021/03/piscina-alta-scaled.jpg",
        daily_price: "R$500,00",
        stars: 5,
        city: "Rio de Janeiro",
        description:
          "Localizado a 500 m da Praia de Copacabana, o Royal Rio Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô Cardeal Arcoverde e a 10 km do Aeroporto Santos Dumont.",
        wifi: true,
        air_conditioned: true,
        phone: "(22)98650000",
        email: "htl@gmail.com",
      },
      {
        id: 2,
        name: "Fasyano Palace Hotel",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/79/Ponta_Negra_Beach_Hotel.jpg",
        daily_price: "R$300,00",
        stars: 3,
        city: "São Paulo",
        description:
          "Localizado em são paulo, o Fasyano Palace oferece piscina com vista panorâmica do mar na cobertura e café da manhã. O hotel está a 300 metros da Estação de Metrô.",
        wifi: true,
        air_conditioned: false,
        phone: "(22)98651111",
        email: "htl1@gmail.com",
      },
    ];
    const wrapper = mount(<Cards hotels={hotels} />);
    const cards = wrapper.find(".MuiCard-root");
    expect(cards.length).toBe(2);
  });
});
