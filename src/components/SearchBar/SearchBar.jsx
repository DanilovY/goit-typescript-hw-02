import { useState } from "react";
import { toast } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ handSub }) => {
  const [cur, setCur] = useState("");

  const onSub = (e) => {
    e.preventDefault();

    if (cur.trim() === "") {
      toast.error("Input field is empty!");
      return;
    }
    handSub(cur);
  };
  return (
    <header className={s.header}>
      <form onSubmit={onSub} className={s.headerForm}>
        <input
          className={s.formInp}
          value={cur}
          onChange={(e) => setCur(e.target.value)}
          type="text"
          placeholder="Search images and photos"
        />
        <button className={s.formBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
export default SearchBar;
