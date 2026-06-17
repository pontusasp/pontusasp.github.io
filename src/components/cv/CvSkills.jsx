function CvSkills({ skills, stretchSkills }) {
    if (!skills || skills.length === 0) return null;

    const withBullets = [];
    skills.forEach((skill, i) => {
        withBullets.push(<span key={`s${i}`}>{skill}</span>);
        if (i < skills.length - 1) {
            withBullets.push(<span key={`b${i}`}>&bull;</span>);
        }
    });

    const stretch = skills.length >= 4 && stretchSkills !== false;
    const className = "flex text-gray-600 " + (stretch ? "justify-between" : "gap-2");

    return <div className={className}>{withBullets}</div>;
}

export default CvSkills;
