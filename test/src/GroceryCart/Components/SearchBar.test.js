import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";
import ProduceData from "../Data.json";
import "@testing-library/jest-dom";
import CloseIcon from "@material-ui/icons/Close";

test("Title text is rendered correctly", async () => {
  render(<SearchBar placeholder="Search for Products..." />);
  const titleElement = screen.queryByText("Grocery Cart:");
  expect(titleElement).toBeInTheDocument();
});

test("Items are shown in search bar when typing the letters", () => {
  render(<SearchBar placeholder="Search for Products..." data={ProduceData} />);
  // Retrieve the input element
  const inputElement = screen.getByPlaceholderText("Search for Products...");

  // Simulate typing 'c' into the search input
  fireEvent.change(inputElement, { target: { value: "c" } });

  // Check if 'Carrots', 'Cucumbers', and 'Avocados' appear in the filtered results
  expect(screen.getByText("Carrots")).toBeInTheDocument();
  expect(screen.getByText("Cucumbers")).toBeInTheDocument();
  expect(screen.getByText("Avocados")).toBeInTheDocument();
  expect(screen.getByText("Spinach")).toBeInTheDocument();
  // when is something not filtered out also check
  expect(screen.queryByText("Kale")).not.toBeInTheDocument();

  fireEvent.change(inputElement, { target: { value: "i" } });
  expect(screen.getByText("Spinach")).toBeInTheDocument();
  expect(screen.getByText("Ginger")).toBeInTheDocument();
  expect(screen.getByText("Onions")).toBeInTheDocument();
  expect(screen.getByText("Broccoli")).toBeInTheDocument();
  expect(screen.queryByText("Kale")).not.toBeInTheDocument();
});
/*
test("Items are shown in search when typing the letters", () => {
  const { getByText, getByPlaceholderText } = render(
    <SearchBar placeholder="Search for Products..." data={ProduceData} />
  );
  // Retrieve the input element
  const inputElement = getByPlaceholderText("Search produce");

  // Define test cases for each letter
  const testCases = [
    { letter: "c", items: ["Carrots", "Cucumbers", "Avocados", "Spinach"] },
    { letter: "i", items: ["Spinach", "Ginger", "Onions", "Broccoli"] },
    { letter: "b", items: ["Cucumbers", "Bell peppers", "Bananas", "Purple cabbage"] },
  ];

  // Loop through each test case
  testCases.forEach(({ letter, items }) => {
    // Simulate typing the letter into the search input
    fireEvent.change(inputElement, { target: { value: letter } });

    // Check if each item appears in the filtered results
    items.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });
});
*/
//make label for ClosingIcon
test("Clears field after clicking x button (fireEvent)", () => {
  render(
    <>
      <SearchBar placeholder="Search for Products..." data={ProduceData} />
      <CloseIcon />
    </>
  );

  // Retrieve the input element
  const inputElement = screen.getByPlaceholderText("Search for Products...");

  // Simulate typing into the input element
  fireEvent.change(inputElement, { target: { value: "Carrots" } });

  // Check if the input value is set to 'Carrots'
  expect(inputElement.value).toBe("Carrots");

  // Retrieve the close icon
  const closeIcon = screen.getByLabelText("Clear search");

  // Simulate clicking on the close icon
  fireEvent.click(closeIcon);

  // Check if the input value is cleared
  expect(inputElement.value).toBe("");
});

test("Clears Field after clicking x button (userEvent)", () => {
  render(
    <>
      <SearchBar placeholder="Search for Products..." data={ProduceData} />
      <CloseIcon />
    </>
  );

  // Retrieve the input element
  const inputElement = screen.getByPlaceholderText("Search for Products...");

  // Simulate typing into the input element
  userEvent.type(inputElement, "Carrots");

  // Check if the input value is set to 'Carrots'
  expect(inputElement.value).toBe("Carrots");

  // Retrieve the close icon
  const closeIcon = screen.getByLabelText("Clear search");

  // Simulate clicking on the close icon
  userEvent.click(closeIcon);

  // Check if the input value is cleared
  expect(inputElement.value).toBe("");
});
