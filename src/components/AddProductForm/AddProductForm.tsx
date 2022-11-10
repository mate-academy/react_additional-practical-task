type Props = {
title: string;
setQuere: (value: string) => void;
setSelect: (value: string) => void;
reset: () => void;
};

export const AddProductForm: React.FC<Props> = ({title, setQuere, setSelect,reset}) => (
  <form className="form">
  <div className="field">
    <div className="control">
      <input
        className="input"
        type="text"
        placeholder="product name"
        value={title}
        onChange={(event) => setQuere(event.target.value)}
      />
    </div>
  </div>

  <div className="field">
    <div className="control">
      <div className="select">
        <select onChange={(event) => setSelect(event.target.value)}>
          <option value={'Grocery'}>Grocery</option>
          <option value={'Drinks'}>Drinks</option>
          <option value={'Fruits'}>Fruits</option>
          <option value={'Electronics'}>Electronics</option>
          <option value={'Clothes'}>Clothes</option>
        </select>
      </div>
    </div>
  </div>

  <div className="field is-grouped">
    <div className="control">
      <button
        type="submit"
        className="button is-link"
        onClick={reset}
      >
        Submit
      </button>
    </div>
  </div>
</form>
);
