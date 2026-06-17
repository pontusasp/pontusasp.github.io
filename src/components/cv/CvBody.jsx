function CvBody({ text }) {
    if (!text) return null;

    const paragraphs = text.split("\n\n");

    return paragraphs.map((paragraph, i) => (
        <p key={i}>
            {paragraph.split(/(\*[^*]+\*)/).map((segment, j) => {
                if (segment.startsWith("*") && segment.endsWith("*")) {
                    return <em key={j}>{segment.slice(1, -1)}</em>;
                }
                return segment;
            })}
        </p>
    ));
}

export default CvBody;
