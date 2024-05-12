// import css from "./ContactForm.module.css";
import { useId } from "react";

export default function ContactForm({ onAdd }) {
  const fieldId = useId();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    onAdd({
      id: Date.now().toString(),
      name: ev.target.name.value,
      number: ev.target.number.value,
    });
    ev.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${fieldId}-name`}>Name</label>
      <input type="text" name="name" id={`${fieldId}-name`} />
      <label htmlFor={`${fieldId}-number`}>Number</label>
      <input type="tel" name="number" id={`${fieldId}-number`} />
      <button type="submit">Add contact</button>
    </form>
  );
}
