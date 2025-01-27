import React from "react";
import Dates from "../components/Date";

export default {
  title: "Date",
  component: Dates,
};

export const DateStory = () => (
  <Dates className="dark:bg-black rounded-md bg-secondary text-white text-sm py-5" />
);
