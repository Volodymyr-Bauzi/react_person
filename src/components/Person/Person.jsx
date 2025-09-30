// export const Person = ({ person }) => ();
export const Person = ({ person }) => {
  const { name, age, partnerName, sex } = person;
  const hasAge = age !== undefined;
  const isMarried = partnerName !== undefined;
  let partnerLabel;

  if (sex === 'm') {
    partnerLabel = 'wife';
  } else {
    partnerLabel = 'husband';
  }

  const partnerMessage = isMarried
    ? `${partnerName} is my ${partnerLabel}`
    : 'I am not married';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {hasAge && <p className="Person__age">{`I am ${age}`}</p>}
      <p className="Person__partner">{partnerMessage}</p>
    </section>
  );
};
