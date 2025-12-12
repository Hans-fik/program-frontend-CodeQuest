import React from "react";

const CourseCard = ({ title, subtitle, description, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="course-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="course-content">
        <div className="course-title">{title}</div>
        <div className="course-subtitle">{subtitle}</div>
        <div className="course-description">{description}</div>
      </div>
    </div>
  );
};

export default CourseCard;
