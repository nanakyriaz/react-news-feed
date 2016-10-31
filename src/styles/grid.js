import _ from 'lodash';

const cols = 12;
const gutter = 2; // percent

const baseColWidth = (100 - (cols + 1) * gutter) / cols;

const colBase = {
  float: "left",
  margin: `0 ${gutter/2}%`,
};

export const row = {
  display: "block",
  clear: "both"
};

export function col(n) {
  let guttersWidth = (n - 1) * gutter;
  let colWidth = baseColWidth * n + guttersWidth;
  return _.extend({
    width: `${colWidth}%`
  }, colBase);
}
