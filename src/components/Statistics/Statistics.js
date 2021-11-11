import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import GenerateColor from "../helpers/GenerateColor";

function Statistics({ title, stats }) {
  const { statistics, statTitle, statList, item, statLabel, statPercentage } =
    s;
  return (
    <section className={statistics}>
      <h2 className={statTitle}>{title}</h2>

      <ul className={statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={item}
            key={id}
            style={{ backgroundColor: GenerateColor() }}
          >
            <span className={statLabel}>{label}</span>
            <span className={statPercentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.defaultProps = {
  title: "statistic",
  percentage: 0,
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
