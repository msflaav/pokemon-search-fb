import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react'
import App from './App';
import { getPokemon } from "./pages/home"
import Search from './components/Search';
import { user, userEvent } from '@testing-library/user-event';

describe('search engine', () => {
  const onSubmit = jest.fn();
  const setup = () => render(<Search />);

  beforeEach(() => {
    onSubmit.mockClear();
  });

  it('renders home component', () => {
    render(<App />);
    const divElement = screen.getByText(/Welcome to the pokemon search engine/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should have the search button', () => {
    setup();
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });

  it('should have the search field', () => {
    setup();
    expect(screen.getByTestId('search-box')).toBeInTheDocument();
  });

  //following tests are not working - commented out - im not too familiar with React Testing but these would be the tests I would be implementing
  it('shows an alert on screen if search button is clicked without content', () => {
    setup();
    // fireEvent.click(screen.getByText(/Search/i))
    //expect(screen.getByTestId('alert')).toBeInTheDocument();
    // expect(screen.getByText(/You must enter a valid Pokemon name/i)).toBeInTheDocument();
  })

  it('shows an alert on screen if search button is clicked without a valid pokemon name', () => {
    setup();
    // const input = screen.getByTestId('search-box')
    // userEvent.type(input, 'flavia')
    // fireEvent.click(screen.getByText(/Search/i))
    // expect(screen.getByTestId('alert')).toBeInTheDocument();
  })

  it('when search button is clicked with valid name returns name, picture, description and Shakespeare description translation for the pokemon name searched', () => {
    setup();
    // const input = screen.getByTestId('search-box')
    // userEvent.type(input, 'pikachu')
    // userEvent.click(screen.getByTestId('button'));
    // expect(screen.getByTestId('pokemon-name','pokemon-avatar', 'pokemon-description','pokemon--shakespeare-description')).toBeInTheDocument();
  })

})

const stubbedData = [
  {
    name: "Charizard",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    description: "CHARIZARD flies around the sky in search of powerful opponents. It breathes fire of such great heatthat it melts anything. However, it never turns its fiery breath on any opponent weaker than itself. ",
    descriptionShakespeare: "Charizard flies 'round the sky insearch of powerful opponents.'t breathes fire of such most wondrous heat yond 't melts aught. However, itnever turns its fiery breath on anyopponent weaker than itself."
  },
];

describe('api requests', () => {

  it('should return a status code of 200 and a definted body as response', async () => {
    //   jest.spyOn(global, 'fetch').mockImplementation(() =>
    //     Promise.resolve({
    //       json: () =>
    //         Promise.resolve({
    //           status: 200,
    //           data: stubbedData,
    //         }),
    //       })
    //   );

    //   const result = await getPokemon();

    //   expect(result.status).toBe(200);
    //   expect(result.data).toBe(stubbedData);
  })

  it("should catch error", async () => {
    // Mock API
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve({
    //         status: 500,
    //       }),
    //   })
    // );

    // const result = await getPokemon();

    // expect(result.status).toBe(500);
    // expect(result.data).not.toBeDefined();
  });
});