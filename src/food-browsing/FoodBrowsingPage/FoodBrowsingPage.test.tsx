import { render, screen, act, waitFor, within } from '@testing-library/react';

import { FoodBrowsingPage } from './FoodBrowsingPage';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { defaultMockCategories } from '@/category/mockHandlers';
import { defaultMockFoods } from '@/food/mockHandlers';

const renderComponent = () =>
  render(
    <BrowserRouter>
      <FoodBrowsingPage />
    </BrowserRouter>
  );

it('should show first page foods when first load', async () => {
  renderComponent();

  await waitFor(() => {
    expect(screen.getAllByTestId('food-card')).toHaveLength(10);
  });
});

it('should show categories with "All" option', async () => {
  renderComponent();

  await waitFor(() => {
    expect(within(screen.getByTestId('category-tabs')).getByText('All')).toBeInTheDocument();
  });
});

it('should filter foods by first category', async () => {
  renderComponent();

  await waitFor(() => {
    expect(within(screen.getByTestId('category-tabs')).getByText('All')).toBeInTheDocument();
  });

  act(() => {
    userEvent.click(within(screen.getByTestId('category-tabs')).getByText(defaultMockCategories[0].name));
  });

  const foodsByCategory = defaultMockFoods.filter(food => food.categoryId === defaultMockCategories[0].id).slice(0, 10);

  foodsByCategory.forEach(food => {
    expect(screen.getByText(food.name)).toBeInTheDocument();
  });
});

it('should filter foods by search query', async () => {
  renderComponent();

  act(() => {
    userEvent.type(screen.getByPlaceholderText('Enter food name...'), 'food 0');
  });

  expect(screen.getByText('Food 00')).toBeInTheDocument();
  expect(screen.getByText('Food 01')).toBeInTheDocument();
  expect(screen.getByText('Food 02')).toBeInTheDocument();
  expect(screen.getByText('Food 03')).toBeInTheDocument();
  expect(screen.getByText('Food 04')).toBeInTheDocument();
  expect(screen.getByText('Food 05')).toBeInTheDocument();
  expect(screen.getByText('Food 06')).toBeInTheDocument();
  expect(screen.getByText('Food 07')).toBeInTheDocument();
  expect(screen.getByText('Food 08')).toBeInTheDocument();
  expect(screen.getByText('Food 09')).toBeInTheDocument();
});

it('should load 10 more when clicking on show more', () => {
  renderComponent();

  act(() => {
    userEvent.click(screen.getByText('+Show more'));
  });

  expect(screen.getAllByTestId('food-card')).toHaveLength(20);
  expect(screen.queryByText('+Show more')).not.toBeInTheDocument();
});

it('should reset pagination when input search', () => {
  renderComponent();

  act(() => {
    userEvent.click(screen.getByText('+Show more'));
  });

  expect(screen.getAllByTestId('food-card')).toHaveLength(20);

  act(() => {
    userEvent.type(screen.getByPlaceholderText('Enter food name...'), 'food');
  });

  expect(screen.getAllByTestId('food-card')).toHaveLength(10);
});

it('should reset pagination when changing category', () => {
  renderComponent();

  act(() => {
    userEvent.click(screen.getByText('+Show more'));
  });

  expect(screen.getAllByTestId('food-card')).toHaveLength(20);

  act(() => {
    userEvent.click(within(screen.getByTestId('category-tabs')).getByText(defaultMockCategories[0].name));
  });

  expect(screen.getAllByTestId('food-card').length).toBeLessThanOrEqual(10);
});
