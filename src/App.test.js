import { render, fireEvent, screen, queryByText, getAllByText } from '@testing-library/react';
import '@testing-library/jest-dom';
import {MemoryRouter} from 'react-router-dom';
import App from './App';

it('should render app', ()=>{
  <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
})

it('Defaults to /dogs', () => {
  const {getByText} =render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  expect(getByText(`Welcome to Erik's Furry Friends!`)).toBeInTheDocument();
})

it('Redirects to /dogs when dog name is not found', ()=> {
  const {getByText} = render(
    <MemoryRouter initialEntries={['/NotRealDog']}>
      <App />
    </MemoryRouter>
  )
  expect(getByText(`Welcome to Erik's Furry Friends!`)).toBeInTheDocument();
})

it('navbar links works', ()=> {
  const {getByText, getAllByText, getByLabelText} = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  )
  fireEvent.click(screen.getByText('Whiskey'))
  expect(getAllByText('Whiskey')[0]).toBeInTheDocument();
  fireEvent.click(screen.getByText('Duke'))
  expect(getAllByText('Duke')[0]).toBeInTheDocument();
  fireEvent.click(screen.getByText('Perry'))
  expect(getAllByText('Perry')[0]).toBeInTheDocument();
  fireEvent.click(screen.getByText('Tubby'))
  expect(getAllByText('Tubby')[0]).toBeInTheDocument();

})


