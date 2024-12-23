import React from "react";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator component tests", () => {
  test("pages count is 11 but should be shown only 10", () => {
    let component;
    act(() => {
      component = renderer.create(
        <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
      );
    });
    const spans = component.root.findAllByType("span");
    expect(spans.length).toBe(10);
  });

  test("if pages count is more than 10 button NEXT should be present", () => {
    let component;
    act(() => {
      component = renderer.create(
        <Paginator totalItemsCount={11} pageSize={1} portionSize={10} />
      );
    });
    const buttons = component.root.findAllByType("button");
    expect(buttons.length).toBe(1);
  });
});
